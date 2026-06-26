import Link from "next/link";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import { COURSES } from "@/lib/data/courses";

const LEVEL_LABEL: Record<string, string> = {
  Beginner: "Анхан шат",
  Pro: "Мэргэжлийн",
  Masterclass: "Masterclass",
};

export default function SurgaltPage() {
  return (
    <>
      <section className="bg-ivory py-16 lg:py-24">
        <Container>
          <SectionHeading
            eyebrow="Сургалт"
            title="Мэргэжлийн сургалтууд"
            subtitle="Гоо сайхны ур чадвараа дээшлүүлж, мэргэжлийн артист болоорой. Бүх сургалт цөөн хүний бүлэгтэй, хувь хүн бүрт анхаарал хандуулсан өгөөж өндөр сургалтууд."
          />
        </Container>
      </section>

      <section className="py-16 lg:py-24">
        <Container>
          <div className="grid gap-8 lg:grid-cols-3">
            {COURSES.map((course) => (
              <article
                key={course.slug}
                className="flex flex-col rounded-2xl border border-charcoal/10 bg-white/40 p-7 shadow-card"
              >
                <span className="self-start rounded-pill bg-champagne px-3 py-1 font-sans text-xs font-medium uppercase tracking-wide text-charcoal/70">
                  {LEVEL_LABEL[course.level]}
                </span>

                <h3 className="mt-4 font-serif text-2xl text-charcoal">
                  {course.title}
                </h3>

                <p className="mt-3 font-sans text-sm leading-relaxed text-charcoal/70">
                  {course.description}
                </p>

                <dl className="mt-5 grid grid-cols-2 gap-4 border-y border-charcoal/10 py-4 font-sans text-sm">
                  <div>
                    <dt className="text-charcoal/50">Хугацаа</dt>
                    <dd className="mt-0.5 font-medium text-charcoal">
                      {course.duration}
                    </dd>
                  </div>
                  <div>
                    <dt className="text-charcoal/50">Бүлгийн хэмжээ</dt>
                    <dd className="mt-0.5 font-medium text-charcoal">
                      {course.groupSize}
                    </dd>
                  </div>
                </dl>

                <ul className="mt-5 space-y-2.5">
                  {course.curriculum.map((item) => (
                    <li
                      key={item}
                      className="flex items-start gap-2.5 font-sans text-sm text-charcoal/80"
                    >
                      <svg
                        width="16"
                        height="16"
                        viewBox="0 0 20 20"
                        fill="none"
                        className="mt-0.5 shrink-0 text-soft-gold"
                        aria-hidden="true"
                      >
                        <path
                          d="M4 10.5l3.5 3.5L16 5.5"
                          stroke="currentColor"
                          strokeWidth="1.8"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                      {item}
                    </li>
                  ))}
                </ul>

                <div className="mt-6">
                  <span className="font-serif text-2xl text-charcoal">
                    {course.price}
                  </span>
                </div>

                <Link
                  href={`/surgalt/tulbur?course=${course.slug}`}
                  className="btn-primary mt-5 w-full"
                >
                  Бүртгүүлэх
                </Link>
              </article>
            ))}
          </div>
        </Container>
      </section>

      {/* Trust блок — захиалга өгөхөөс өмнө итгэл нэмэх */}
      <section className="bg-espresso py-14">
        <Container>
          <div className="flex flex-col items-center gap-6 text-center lg:flex-row lg:justify-between lg:text-left">
            <div>
              <p className="font-serif text-2xl text-champagne lg:text-3xl">
                Аль сургалт тань тохирохыг мэдэхгүй байна уу?
              </p>
              <p className="mt-2 font-sans text-sm text-champagne/70">
                Хувийн зорилго, цаг гаргах боломжтой хугацаандаа тулгуурлан
                зөвлөгөө авъя.
              </p>
            </div>
            <Link
              href="/holboo-barih"
              className="inline-flex items-center justify-center rounded-pill border border-champagne/40 px-6 py-3 font-sans text-sm font-medium text-champagne transition-colors hover:bg-champagne hover:text-espresso"
            >
              Зөвлөгөө авах
            </Link>
          </div>
        </Container>
      </section>
    </>
  );
}
