import Link from "next/link";
import type { Metadata } from "next";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import BankTransferCard from "@/components/sections/BankTransferCard";
import { BOOKING_DEPOSIT_AMOUNT } from "@/lib/data/payment";

export const metadata: Metadata = {
  title: "Цаг баталгаажуулах урьдчилгаа",
};

type PageProps = {
  // Cal.com-оор цаг сонгосны дараа redirect хийхдээ ?service=... дамжуулж
  // болно (дараагийн шатанд Cal.com холбогдоход ашиглагдана).
  searchParams: Promise<{ service?: string }>;
};

export default async function ZahialgaAmjilttaiPage({
  searchParams,
}: PageProps) {
  const { service } = await searchParams;
  const label = service ?? "Цаг захиалгын урьдчилгаа";

  return (
    <section className="py-16 lg:py-24">
      <Container className="max-w-2xl">
        <Link href="/zahialga" className="font-sans text-sm text-dusty-rose">
          ← Цаг захиалга руу буцах
        </Link>

        <div className="mt-6">
          <SectionHeading
            eyebrow="Алхам 2 / 2"
            title="Цаг товлогдлоо — урьдчилгаа төлж баталгаажуулна уу"
            subtitle="Таны сонгосон цагийг түр блоклосон байна. Доорх дансанд урьдчилгаа төлбөрөө шилжүүлж, гүйлгээний утганд нэр, утасны дугаараа бичсэний дараа цаг эцэслэн баталгаажина."
          />
        </div>

        <div className="mt-10">
          <BankTransferCard
            label={label}
            amount={BOOKING_DEPOSIT_AMOUNT}
            showQr
          />

          <div className="mt-8 rounded-2xl bg-ivory p-6">
            <p className="font-serif text-lg text-charcoal">Дараагийн алхам</p>
            <ol className="mt-3 space-y-2 font-sans text-sm leading-relaxed text-charcoal/70">
              <li>
                1. QR кодоор уншуулах эсвэл дансны дугаарыг гараар хуулж
                шилжүүлнэ үү.
              </li>
              <li>
                2. Гүйлгээний утганд бүтэн нэр, утасны дугаараа заавал бичнэ үү.
              </li>
              <li>
                3. Урьдчилгаа төлбөрийг хүлээн авсны дараа таны цаг эцэслэн
                баталгаажиж, баталгаажуулах мессеж очно.
              </li>
            </ol>
            <p className="mt-4 font-sans text-xs text-charcoal/50">
              Урьдчилгаа нь захиалгыг баталгаажуулахад зориулагдсан бөгөөд
              үйлчилгээний эцсийн төлбөрөөс хасагдана.
            </p>
            <Link
              href="/holboo-barih"
              className="btn-secondary mt-5 inline-flex"
            >
              Асуулт байвал холбогдох
            </Link>
          </div>
        </div>
      </Container>
    </section>
  );
}
