import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import Link from "next/link";

const CERTIFICATES = [
  { title: "Make-Up Artist (Certified), Улаанбаатар", year: "2022" },
  { title: "Sigma Beauty Pro Artist сертификат", year: "2023" },
  { title: "Bridal Makeup Intensive, Сөүл", year: "2024" },
];

const BRANDS = [
  "MAC Cosmetics",
  "Charlotte",
  "Huda Beauty",
  "L'Oréal Mongolia",
];

const STATS = [
  { value: "5+", label: "жилийн туршлага" },
  { value: "500+", label: "сэтгэл хангалуцсан үйлчлүүлэгч" },
  { value: "3", label: "олон улсын сертификат" },
];

export default function BidniiTuhaiPage() {
  return (
    <>
      <section className="bg-ivory py-16 lg:py-24">
        <Container>
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <div>
              <SectionHeading
                eyebrow="Бидний тухай"
                title="Миний тухай ба миний "
              />
              <p className="mt-6 font-sans leading-relaxed text-charcoal/80">
                Сайн байна уу, намайг Тэмүүлэн гэдэг. Би мэргэжлийн нүүр бүдагч
                артист бөгөөд 10 гаруй жилийн турш эмэгтэйчүүдийг өөрийн гоо
                үзэсгэлэнг олж харахад тусалж байна. Миний хувьд мэйкап бол нүүр
                царайг өөрчлөх биш, харин аль хэдийн байгаа гэрэлтэй чанарыг
                тодотгох урлаг гэж боддог.
              </p>
              <p className="mt-4 font-sans leading-relaxed text-charcoal/80">
                Баярын зураг авалт, гоёлын болон өдөр тутмын будалт мэйкапын
                чиглэлээр ажилладаг бөгөөд үйлчлүүлэгч бүртэйгээ хувь хүний
                онцлогт нь тохирсон арга барил олохыг эрмэлздэг.
              </p>

              <div className="mt-8 grid grid-cols-3 gap-4">
                {STATS.map((stat) => (
                  <div key={stat.label}>
                    <p className="font-serif text-3xl text-charcoal">
                      {stat.value}
                    </p>
                    <p className="mt-1 font-sans text-xs text-charcoal/60">
                      {stat.label}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            <div
              className="aspect-[4/5] w-full rounded-2xl bg-champagne"
              aria-hidden="true"
            />
          </div>
        </Container>
      </section>

      {/* Гэрчилгээ, сертификат */}
      <section className="py-16 lg:py-24">
        <Container>
          <SectionHeading
            eyebrow="Мэргэжлийн чадамж"
            title="Гэрчилгээ, сертификат"
          />
          <div className="mt-8 grid gap-4 sm:grid-cols-3">
            {CERTIFICATES.map((cert) => (
              <div
                key={cert.title}
                className="rounded-2xl border border-charcoal/10 bg-white/40 p-6"
              >
                <p className="font-sans text-xs uppercase tracking-wide text-dusty-rose">
                  {cert.year}
                </p>
                <p className="mt-2 font-serif text-lg text-charcoal">
                  {cert.title}
                </p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Хамтран ажилласан брэндүүд */}
      <section className="bg-ivory py-16 lg:py-24">
        <Container>
          <SectionHeading
            eyebrow="Хамтрал"
            title="Хамтран ажилласан брэндүүд"
            align="center"
          />
          <div className="mt-10 flex flex-wrap items-center justify-center gap-x-10 gap-y-6">
            {BRANDS.map((brand) => (
              <span
                key={brand}
                className="font-serif text-xl text-charcoal/50 lg:text-2xl"
              >
                {brand}
              </span>
            ))}
          </div>
        </Container>
      </section>

      <section className="py-16 text-center lg:py-20">
        <Container>
          <p className="font-serif text-2xl text-charcoal lg:text-3xl">
            Танай өдрийг хамтдаа гоёмсог болгоё
          </p>
          <Link href="/zahialga" className="btn-primary mt-6 inline-flex">
            Захиалга өгөх
          </Link>
        </Container>
      </section>
    </>
  );
}
