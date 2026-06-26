import Link from "next/link";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import StarRating from "@/components/ui/StarRating";
import { TESTIMONIALS } from "@/lib/data/testimonials";
import { format } from "date-fns";

function average(nums: number[]) {
  return (nums.reduce((a, b) => a + b, 0) / nums.length).toFixed(1);
}

export default function SetgegdelPage() {
  const avg = average(TESTIMONIALS.map((t) => t.rating));

  return (
    <>
      <section className="bg-ivory py-16 lg:py-24">
        <Container>
          <SectionHeading
            eyebrow="Сэтгэгдэл"
            title="Үйлчлүүлэгчдийн сэтгэгдэл"
            subtitle="Тэдний сэтгэл ханамж бол хамгийн чухал зүйл."
            align="center"
          />

          <div className="mx-auto mt-8 flex w-fit items-center gap-4 rounded-pill border border-charcoal/10 bg-white/60 px-6 py-3">
            <span className="font-serif text-3xl text-charcoal">{avg}</span>
            <div>
              <StarRating rating={Math.round(Number(avg))} />
              <p className="mt-0.5 font-sans text-xs text-charcoal/60">
                {TESTIMONIALS.length}+ үйлчлүүлэгчийн үнэлгээ
              </p>
            </div>
          </div>
        </Container>
      </section>

      <section className="py-16 lg:py-24">
        <Container>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {TESTIMONIALS.map((t) => (
              <figure
                key={t.id}
                className="flex flex-col rounded-2xl border border-charcoal/10 bg-white/40 p-6"
              >
                <StarRating rating={t.rating} />
                <blockquote className="mt-4 flex-1 font-sans text-sm leading-relaxed text-charcoal/80">
                  “{t.comment}”
                </blockquote>
                <figcaption className="mt-5 flex items-center justify-between border-t border-charcoal/10 pt-4">
                  <div>
                    <p className="font-serif text-base text-charcoal">
                      {t.name}
                    </p>
                    <p className="font-sans text-xs text-charcoal/50">
                      {t.service}
                    </p>
                  </div>
                  <span className="font-sans text-xs text-charcoal/40">
                    {format(new Date(t.date), "yyyy.MM")}
                  </span>
                </figcaption>
              </figure>
            ))}
          </div>
        </Container>
      </section>

      <section className="bg-espresso py-14 text-center">
        <Container>
          <p className="font-serif text-2xl text-champagne lg:text-3xl">
            Та ч мөн сэтгэгдэл бичих
          </p>
          <p className="mt-2 font-sans text-sm text-champagne/70">
            Үйлчлүүлсний дараа Google эсвэл Instagram дээр богино сэтгэгдэл
            үлдээвэл бид маш их баярлах болно.
          </p>
          <Link
            href="/holboo-barih"
            className="mt-6 inline-flex items-center justify-center rounded-pill border border-champagne/40 px-6 py-3 font-sans text-sm font-medium text-champagne transition-colors hover:bg-champagne hover:text-espresso"
          >
            Холбоо барих
          </Link>
        </Container>
      </section>
    </>
  );
}
