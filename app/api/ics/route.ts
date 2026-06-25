import { NextRequest, NextResponse } from "next/server";

// GET /api/ics?start=...&end=...&summary=...
// Захиалгын Confirmation screen-ийн "Календарьт нэмэх" товч энэ route-оор
// .ics файл татаж, хэрэглэгч өөрийн (Google/Apple/Outlook) календарьт нэмнэ.
export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url);
  const start = searchParams.get("start");
  const end = searchParams.get("end");
  const summary = searchParams.get("summary") ?? "Мэйкап захиалга";

  if (!start || !end) {
    return NextResponse.json({ error: "start, end шаардлагатай." }, { status: 400 });
  }

  const toIcsDate = (iso: string) => iso.replace(/[-:]/g, "").split(".")[0] + "Z";

  const icsContent = [
    "BEGIN:VCALENDAR",
    "VERSION:2.0",
    "PRODID:-//SaraaMakeup//Booking//MN",
    "BEGIN:VEVENT",
    `DTSTART:${toIcsDate(start)}`,
    `DTEND:${toIcsDate(end)}`,
    `SUMMARY:${summary}`,
    "END:VEVENT",
    "END:VCALENDAR",
  ].join("\r\n");

  return new NextResponse(icsContent, {
    headers: {
      "Content-Type": "text/calendar; charset=utf-8",
      "Content-Disposition": "attachment; filename=zahialga.ics",
    },
  });
}
