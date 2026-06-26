import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import ContactForm from "@/components/sections/ContactForm";
import { SITE_CONFIG } from "@/lib/nav";

export default function HolbooBarihPage() {
  return (
    <section className="py-16 lg:py-24">
      <Container>
        <SectionHeading eyebrow="Холбоо барих" title="Холбоо барих" />

        <div className="mt-10 grid gap-12 lg:grid-cols-2">
          {/* Форм */}
          <div>
            <ContactForm />
          </div>

          {/* Байршил, цаг, газрын зураг */}
          <div>
            <h3 className="font-serif text-xl text-charcoal">Бидний байршил</h3>

            <dl className="mt-5 space-y-4 font-sans text-sm">
              <div className="flex items-start gap-3">
                <IconPin />
                <div>
                  <dt className="text-charcoal/50">Хаяг</dt>
                  <dd className="mt-0.5 text-charcoal">
                    {SITE_CONFIG.address}
                  </dd>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <IconClock />
                <div>
                  <dt className="text-charcoal/50">Ажиллах цаг</dt>
                  <dd className="mt-0.5 text-charcoal">{SITE_CONFIG.hours}</dd>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <IconPhone />
                <div>
                  <dt className="text-charcoal/50">Утас</dt>
                  <dd className="mt-0.5">
                    <a
                      href={SITE_CONFIG.phoneHref}
                      className="text-charcoal hover:text-dusty-rose"
                    >
                      {SITE_CONFIG.phone}
                    </a>
                  </dd>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <IconMail />
                <div>
                  <dt className="text-charcoal/50">Имэйл</dt>
                  <dd className="mt-0.5">
                    <a
                      href={SITE_CONFIG.emailHref}
                      className="text-charcoal hover:text-dusty-rose"
                    >
                      {SITE_CONFIG.email}
                    </a>
                  </dd>
                </div>
              </div>
            </dl>

            {/* Газрын зураг — энгийн iframe embed, API key шаардахгүй.
                Production дээр src-ийн query-г бодит хаягаар сольно. */}
            <div className="mt-8 overflow-hidden rounded-2xl border border-charcoal/10">
              <iframe
                title="Байршил"
                src="https://www.google.com/maps?q=Sukhbaatar+District+Ulaanbaatar+Mongolia&output=embed"
                width="100%"
                height="280"
                style={{ border: 0 }}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}

function IconPin() {
  return (
    <svg
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="none"
      className="mt-0.5 shrink-0 text-dusty-rose"
      aria-hidden="true"
    >
      <path
        d="M12 21s7-6.5 7-12a7 7 0 1 0-14 0c0 5.5 7 12 7 12Z"
        stroke="currentColor"
        strokeWidth="1.5"
      />
      <circle cx="12" cy="9" r="2.4" stroke="currentColor" strokeWidth="1.5" />
    </svg>
  );
}
function IconClock() {
  return (
    <svg
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="none"
      className="mt-0.5 shrink-0 text-dusty-rose"
      aria-hidden="true"
    >
      <circle cx="12" cy="12" r="8.5" stroke="currentColor" strokeWidth="1.5" />
      <path
        d="M12 7.5V12l3 2"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
    </svg>
  );
}
function IconPhone() {
  return (
    <svg
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="none"
      className="mt-0.5 shrink-0 text-dusty-rose"
      aria-hidden="true"
    >
      <path
        d="M5 4h3.2l1.4 4.6-2.1 1.7a12 12 0 0 0 6.2 6.2l1.7-2.1L19 16v3.2c0 .9-.7 1.6-1.6 1.5C9.6 20 4 14.4 3.5 6.6 3.4 5.7 4.1 5 5 5Z"
        stroke="currentColor"
        strokeWidth="1.4"
      />
    </svg>
  );
}
function IconMail() {
  return (
    <svg
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="none"
      className="mt-0.5 shrink-0 text-dusty-rose"
      aria-hidden="true"
    >
      <rect
        x="3"
        y="5"
        width="18"
        height="14"
        rx="2"
        stroke="currentColor"
        strokeWidth="1.4"
      />
      <path d="M4 7l8 6 8-6" stroke="currentColor" strokeWidth="1.4" />
    </svg>
  );
}
