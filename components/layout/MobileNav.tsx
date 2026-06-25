"use client";

import Link from "next/link";
import { PRIMARY_NAV, BOOKING_CTA } from "@/lib/nav";

type Props = {
  isOpen: boolean;
  onClose: () => void;
};

export default function MobileNav({ isOpen, onClose }: Props) {
  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-30 bg-champagne lg:hidden"
      style={{ top: "var(--header-height)" }}
      role="dialog"
      aria-modal="true"
    >
      <nav
        className="flex h-full flex-col gap-1 px-6 py-8"
        aria-label="Гар утасны цэс"
      >
        {PRIMARY_NAV.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            onClick={onClose}
            className="border-b border-charcoal/10 py-4 font-serif text-xl text-charcoal"
          >
            {item.label}
          </Link>
        ))}

        <Link
          href={BOOKING_CTA.href}
          onClick={onClose}
          className="btn-primary mt-6 w-full"
        >
          {BOOKING_CTA.label}
        </Link>
      </nav>
    </div>
  );
}
