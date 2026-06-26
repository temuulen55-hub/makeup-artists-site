import Link from "next/link";
import type { Metadata } from "next";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import BankTransferCard from "@/components/sections/BankTransferCard";
import { COURSES } from "@/lib/data/courses";

export const metadata: Metadata = {
  title: "Сургалтын төлбөр",
};

type PageProps = {
  // Next.js 15: searchParams нь Promise — заавал await хийнэ.
  searchParams: Promise<{ course?: string }>;
};

export default async function SurgaltTulburPage({ searchParams }: PageProps) {
  const { course: courseSlug } = await searchParams;
  const course = COURSES.find((c) => c.slug === courseSlug);

  return (
    <section className="py-16 lg:py-24">
      <Container className="max-w-2xl">
        <Link href="/surgalt" className="font-sans text-sm text-dusty-rose">
          ← Сургалтууд руу буцах
        </Link>

        <div className="mt-6">
          <SectionHeading
            eyebrow="Сургалтын төлбөр"
            title={course ? course.title : "Сургалтаа сонгоно уу"}
            subtitle={
              course
                ? "Доорх дансанд төлбөрөө шилжүүлээд, гүйлгээний утга дээр нэр, утасны дугаараа бичнэ үү. Бид баталгаажуулсны дараа таньтай холбогдох болно."
                : "Төлбөр төлөхийн тулд эхлээд аль сургалтад бүртгүүлэхээ сонгоно уу."
            }
          />
        </div>

        {course ? (
          <div className="mt-10">
            <BankTransferCard label={course.title} amount={course.price} showQr={false} />

            <div className="mt-8 rounded-2xl bg-ivory p-6">
              <p className="font-serif text-lg text-charcoal">Дараагийн алхам</p>
              <ol className="mt-3 space-y-2 font-sans text-sm leading-relaxed text-charcoal/70">
                <li>1. Дээрх дансанд сургалтын төлбөрийг бүтнээр шилжүүлнэ үү.</li>
                <li>2. Гүйлгээний утганд бүтэн нэр, утасны дугаараа заавал бичнэ үү.</li>
                <li>
                  3. Бид төлбөрийг шалгасны дараа баталгаажуулах мессеж илгээнэ
                  (24 цагийн дотор).
                </li>
              </ol>
              <Link href="/holboo-barih" className="btn-secondary mt-5 inline-flex">
                Асуулт байвал холбогдох
              </Link>
            </div>
          </div>
        ) : (
          <div className="mt-10 grid gap-4">
            {COURSES.map((c) => (
              <Link
                key={c.slug}
                href={`/surgalt/tulbur?course=${c.slug}`}
                className="flex items-center justify-between rounded-2xl border border-charcoal/10 bg-white/40 p-5 transition-colors hover:border-dusty-rose"
              >
                <div>
                  <p className="font-serif text-lg text-charcoal">{c.title}</p>
                  <p className="mt-1 font-sans text-sm text-charcoal/60">{c.duration}</p>
                </div>
                <span className="font-serif text-xl text-charcoal">{c.price}</span>
              </Link>
            ))}
          </div>
        )}
      </Container>
    </section>
  );
}
