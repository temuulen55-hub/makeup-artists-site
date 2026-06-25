import { NextResponse } from "next/server";
import { z } from "zod";
import { createBookingEvent } from "@/lib/googleCalendar";

// POST /api/booking — Захиалга Stepper-ийн 3-р алхамыг (Мэдээлэл бөглөх)
// баталгаажуулсны дараа дуудагдана.
const BookingSchema = z.object({
  start: z.string().datetime(),
  end: z.string().datetime(),
  customerName: z.string().min(2),
  customerPhone: z.string().min(8),
  customerEmail: z.string().email(),
  serviceName: z.string().min(2),
});

export async function POST(request: Request) {
  const body = await request.json();
  const parsed = BookingSchema.safeParse(body);

  if (!parsed.success) {
    return NextResponse.json(
      { error: "Мэдээлэл буруу байна.", details: parsed.error.flatten() },
      { status: 400 }
    );
  }

  try {
    const event = await createBookingEvent(parsed.data);

    // TODO: Resend/Twilio-аар баталгаажуулах имэйл/SMS илгээх дараагийн алхам
    // (Acceptance Criteria: "Форм бүртгэл амжилттай бол хэрэглэгч баталгаажуулах
    // имэйл/мессеж хүлээн авна").

    return NextResponse.json({ success: true, eventId: event.id });
  } catch (error) {
    if (error instanceof Error && error.message === "SLOT_TAKEN") {
      // Давхар захиалгаас сэргийлэх логик — Acceptance Criteria-г шууд хангана.
      return NextResponse.json(
        { error: "Уучлаарай, энэ цаг сая дөнгөж захиалагдчихжээ. Өөр цаг сонгоно уу." },
        { status: 409 }
      );
    }

    console.error("[/api/booking] алдаа:", error);
    return NextResponse.json(
      { error: "Захиалга үүсгэхэд алдаа гарлаа." },
      { status: 500 }
    );
  }
}
