"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { PRIMARY_NAV, BOOKING_CTA, SITE_CONFIG } from "@/lib/nav";
import MobileNav from "./MobileNav";

export default function Header() {
  const [isMobileNavOpen, setIsMobileNavOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  // Header sticky үед subtle shadow/border нэмэгдэх — Site Map-д заасан "Header (Sticky)"
  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <header
        className={`sticky top-0 z-40 w-full bg-champagne/95 backdrop-blur transition-shadow ${
          isScrolled ? "shadow-card" : ""
        }`}
        style={{ height: "var(--header-height)" }}
      >
        <div className="mx-auto flex h-full max-w-content items-center justify-between px-5 lg:px-8">
          {/* Лого — зүүн талд (UX зарчим: brand recognition эхэнд) */}
          <Link
            href="/"
            className="font-serif text-2xl font-medium tracking-tight text-charcoal"
          >
            {SITE_CONFIG.name}
          </Link>

          {/* Desktop нav — баруун талд */}
          <nav
            className="hidden items-center gap-7 lg:flex"
            aria-label="Үндсэн цэс"
          >
            {PRIMARY_NAV.map((item) => (
              <Link key={item.href} href={item.href} className="nav-link">
                {item.label}
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-3">
            {/* Тогтмол харагдах primary CTA — desktop дээр header дотор */}
            <Link
              href={BOOKING_CTA.href}
              className="btn-primary hidden lg:inline-flex"
            >
              {BOOKING_CTA.label}
            </Link>

            {/* Hamburger — mobile/tablet */}
            <button
              type="button"
              aria-label={isMobileNavOpen ? "Цэсийг хаах" : "Цэсийг нээх"}
              aria-expanded={isMobileNavOpen}
              onClick={() => setIsMobileNavOpen((open) => !open)}
              className="flex h-10 w-10 items-center justify-center rounded-full lg:hidden"
            >
              <svg
                width="22"
                height="22"
                viewBox="0 0 22 22"
                fill="none"
                aria-hidden="true"
              >
                {isMobileNavOpen ? (
                  <path
                    d="M4 4L18 18M18 4L4 18"
                    stroke="currentColor"
                    strokeWidth="1.6"
                    strokeLinecap="round"
                  />
                ) : (
                  <path
                    d="M3 6H19M3 11H19M3 16H19"
                    stroke="currentColor"
                    strokeWidth="1.6"
                    strokeLinecap="round"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>
      </header>

      <MobileNav
        isOpen={isMobileNavOpen}
        onClose={() => setIsMobileNavOpen(false)}
      />
    </>
  );
}
