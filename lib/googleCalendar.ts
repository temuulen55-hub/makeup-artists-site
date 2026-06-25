import { google } from "googleapis";

/**
 * ЗАХИАЛГЫН СИСТЕМ — Google Calendar интеграц
 * ------------------------------------------------------------------
 * Blueprint 3.2: "Боломжтой өдөр/цагийг calendar дээрээс real-time харах,
 * Google Calendar-тай sync хийгдсэн байх ёстой, давхар захиалгаас сэргийлэх."
 *
 * Бид OAuth (хэрэглэгчийн нэрээр нэвтрэх) биш Service Account ашиглана,
 * учир нь энд "хэн нэгний" календарь биш — БИЗНЕСИЙН нэг календарийг
 * server-ээс удирдах хэрэгцээ байна. Тохиргоо:
 *
 *   1. Google Cloud Console > IAM > Service Accounts -> шинэ account үүсгэх
 *   2. Calendar API-г project дээр Enable хийх
 *   3. Зураачийн Google Calendar-ийг тухайн service account-ийн
 *      email рүү "Make changes to events" эрхээр Share хийх
 *   4. Service account-ийн JSON key-ээс client_email, private_key-г
 *      .env.local руу хуулах (GOOGLE_SERVICE_ACCOUNT_*)
 *
 * Энэ нь хэрэглэгчийг ямар нэгэн "Google-ээр нэвтрэх" алхамаар
 * дамжуулахгүйгээр шууд серверээс цаг шалгаж, үүсгэх боломж олгоно.
 */

function getCalendarClient() {
  const auth = new google.auth.JWT({
    email: process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL,
    key: process.env.GOOGLE_SERVICE_ACCOUNT_PRIVATE_KEY?.replace(/\\n/g, "\n"),
    scopes: ["https://www.googleapis.com/auth/calendar"],
  });
  return google.calendar({ version: "v3", auth });
}

const CALENDAR_ID = process.env.GOOGLE_CALENDAR_ID ?? "primary";

export type TimeSlot = {
  start: string; // ISO 8601
  end: string;
};

/**
 * Тухайн өдрийн боломжтой цагийн интервалуудыг тооцоолно.
 * 1) Ажиллах цагийн дагуу slot-уудыг үүсгэнэ (жишээ нь 60 минут тутамд)
 * 2) Google Calendar-ийн freebusy.query-ээр аль хэдийн захиалагдсан
 *    хугацаануудыг авч, давхцсан slot-уудыг хасна.
 * Энэ функц нь "Захиалга" хуудасны Stepper-ийн 2-р алхамд ашиглагдана.
 */
export async function getAvailableSlots(
  date: string, // "YYYY-MM-DD"
  durationMinutes = 60,
  workingHours: { start: string; end: string } = { start: "10:00", end: "19:00" }
): Promise<TimeSlot[]> {
  const calendar = getCalendarClient();

  const dayStart = new Date(`${date}T${workingHours.start}:00+08:00`);
  const dayEnd = new Date(`${date}T${workingHours.end}:00+08:00`);

  // Тухайн өдрийн аль хэдийн "завгүй" хугацаанууд
  const freebusy = await calendar.freebusy.query({
    requestBody: {
      timeMin: dayStart.toISOString(),
      timeMax: dayEnd.toISOString(),
      items: [{ id: CALENDAR_ID }],
      timeZone: "Asia/Ulaanbaatar",
    },
  });

  const busyRanges =
    freebusy.data.calendars?.[CALENDAR_ID]?.busy?.map((b) => ({
      start: new Date(b.start!),
      end: new Date(b.end!),
    })) ?? [];

  const slots: TimeSlot[] = [];
  const stepMs = durationMinutes * 60 * 1000;

  for (let t = dayStart.getTime(); t + stepMs <= dayEnd.getTime(); t += stepMs) {
    const slotStart = new Date(t);
    const slotEnd = new Date(t + stepMs);

    const overlapsBusy = busyRanges.some(
      (busy) => slotStart < busy.end && slotEnd > busy.start
    );

    if (!overlapsBusy) {
      slots.push({ start: slotStart.toISOString(), end: slotEnd.toISOString() });
    }
  }

  return slots;
}

/**
 * Захиалга баталгаажуулах event үүсгэнэ. Давхар захиалгаас сэргийлэхийн тулд
 * event үүсгэхээс ШУУД ӨМНӨ freebusy-г дахин шалгана (race condition-оос
 * хамгаалах "double-check" — хэрэглэгч slot сонгосон хугацаанаас event
 * баталгаажуулах хүртэл хэдхэн секундын зайд өөр хэрэглэгч мөн ижил
 * slot-ыг авч магадгүй).
 */
export async function createBookingEvent(params: {
  start: string;
  end: string;
  customerName: string;
  customerPhone: string;
  customerEmail: string;
  serviceName: string;
}) {
  const calendar = getCalendarClient();

  const stillFree = await isSlotStillFree(params.start, params.end);
  if (!stillFree) {
    throw new Error("SLOT_TAKEN");
  }

  const event = await calendar.events.insert({
    calendarId: CALENDAR_ID,
    requestBody: {
      summary: `${params.serviceName} — ${params.customerName}`,
      description: `Утас: ${params.customerPhone}\nИмэйл: ${params.customerEmail}`,
      start: { dateTime: params.start, timeZone: "Asia/Ulaanbaatar" },
      end: { dateTime: params.end, timeZone: "Asia/Ulaanbaatar" },
      attendees: [{ email: params.customerEmail }],
    },
  });

  return event.data;
}

async function isSlotStillFree(start: string, end: string) {
  const calendar = getCalendarClient();
  const freebusy = await calendar.freebusy.query({
    requestBody: {
      timeMin: start,
      timeMax: end,
      items: [{ id: CALENDAR_ID }],
    },
  });
  const busy = freebusy.data.calendars?.[CALENDAR_ID]?.busy ?? [];
  return busy.length === 0;
}
