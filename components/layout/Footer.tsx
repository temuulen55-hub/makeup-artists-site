import Link from "next/link";
import { PRIMARY_NAV, SITE_CONFIG } from "@/lib/nav";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-charcoal/10 bg-ivory pb-24 pt-14 lg:pb-14">
      <div className="mx-auto max-w-content px-5 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-4">
          {/* Brand + богино тодорхойлолт */}
          <div className="lg:col-span-2">
            <p className="font-serif text-2xl text-charcoal">
              {SITE_CONFIG.name}
            </p>
            <p className="mt-3 max-w-sm font-sans text-sm text-charcoal/70">
              Сүйт бүсгүй, фэшн болон өдөр тутмын мэйкап үйлчилгээ — Улаанбаатар
              хотод.
            </p>

            {/* Icon grid — Instagram, Facebook, утас (tel:), имэйл (mailto:) */}
            <div className="mt-6 flex items-center gap-4">
              <a
                href={SITE_CONFIG.instagram}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="flex h-10 w-10 items-center justify-center rounded-full
                           border border-charcoal/15 transition-colors hover:border-dusty-rose hover:text-dusty-rose"
              >
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  aria-hidden="true"
                >
                  <rect
                    x="2"
                    y="2"
                    width="20"
                    height="20"
                    rx="5"
                    stroke="currentColor"
                    strokeWidth="1.6"
                  />
                  <circle
                    cx="12"
                    cy="12"
                    r="4.2"
                    stroke="currentColor"
                    strokeWidth="1.6"
                  />
                  <circle cx="17.4" cy="6.6" r="1" fill="currentColor" />
                </svg>
              </a>
              <a
                href={SITE_CONFIG.facebook}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="flex h-10 w-10 items-center justify-center rounded-full
                           border border-charcoal/15 transition-colors hover:border-dusty-rose hover:text-dusty-rose"
              >
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  aria-hidden="true"
                >
                  <path
                    d="M15 8.5h2.5V5H15c-2.2 0-4 1.8-4 4v2H9v3.5h2V20h3.5v-5.5H17l.5-3.5h-3V9c0-.6.4-1 1-1Z"
                    fill="currentColor"
                  />
                </svg>
              </a>
              <a
                href={SITE_CONFIG.phoneHref}
                aria-label="Утасаар холбогдох"
                className="flex h-10 w-10 items-center justify-center rounded-full
                           border border-charcoal/15 transition-colors hover:border-dusty-rose hover:text-dusty-rose"
              >
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  aria-hidden="true"
                >
                  <path
                    d="M5 4h3.2l1.4 4.6-2.1 1.7a12 12 0 0 0 6.2 6.2l1.7-2.1L19 16v3.2c0 .9-.7 1.6-1.6 1.5C9.6 20 4 14.4 3.5 6.6 3.4 5.7 4.1 5 5 5Z"
                    stroke="currentColor"
                    strokeWidth="1.4"
                  />
                </svg>
              </a>
              <a
                href={SITE_CONFIG.emailHref}
                aria-label="Имэйл бичих"
                className="flex h-10 w-10 items-center justify-center rounded-full
                           border border-charcoal/15 transition-colors hover:border-dusty-rose hover:text-dusty-rose"
              >
                <svg
                  width="17"
                  height="17"
                  viewBox="0 0 24 24"
                  fill="none"
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
                  <path
                    d="M4 7l8 6 8-6"
                    stroke="currentColor"
                    strokeWidth="1.4"
                  />
                </svg>
              </a>
            </div>
          </div>

          {/* Цэс давталт — хэрэглэгчид footer-оос ч хуудас руу шилжих боломжтой */}
          <div>
            <p className="font-sans text-xs font-medium uppercase tracking-wide text-charcoal/50">
              Цэс
            </p>
            <ul className="mt-4 space-y-2.5">
              {PRIMARY_NAV.map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className="nav-link">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Ажиллах цаг, байршил — blueprint 3.4 нэмэлт */}
          <div>
            <p className="font-sans text-xs font-medium uppercase tracking-wide text-charcoal/50">
              Бидний байршил
            </p>
            <p className="mt-4 font-sans text-sm text-charcoal/80">
              {SITE_CONFIG.address}
            </p>
            <p className="mt-2 font-sans text-sm text-charcoal/80">
              {SITE_CONFIG.hours}
            </p>
            <a
              href={SITE_CONFIG.phoneHref}
              className="mt-2 block font-sans text-sm text-charcoal/80"
            >
              {SITE_CONFIG.phone}
            </a>
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-3 border-t border-charcoal/10 pt-6 font-sans text-xs text-charcoal/50 lg:flex-row lg:items-center lg:justify-between">
          <p>
            © {year} {SITE_CONFIG.name}. Бүх эрх хуулиар хамгаалагдсан.
          </p>
          <div className="flex gap-5">
            <Link href="/huviin-nuuclal" className="hover:text-charcoal/80">
              Хувийн нууцлалын бодлого
            </Link>
            <Link
              href="/uilchilgeenii-nohtsol"
              className="hover:text-charcoal/80"
            >
              Үйлчилгээний нөхцөл
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
