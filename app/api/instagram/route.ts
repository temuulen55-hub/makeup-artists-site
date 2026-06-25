import { NextResponse } from "next/server";
import { getRecentInstagramPosts } from "@/lib/instagram";

// GET /api/instagram — Бүтээлүүд хуудасны Instagram Feed модуль эндээс дата авна.
// Клиент тал Meta-руу шууд хандахгүй, зөвхөн энэ route-той ярина.
export async function GET() {
  try {
    const posts = await getRecentInstagramPosts(12);
    return NextResponse.json({ posts });
  } catch (error) {
    console.error("[/api/instagram] алдаа:", error);
    return NextResponse.json(
      { error: "Instagram feed ачаалахад алдаа гарлаа." },
      { status: 502 }
    );
  }
}
