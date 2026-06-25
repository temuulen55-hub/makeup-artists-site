import Link from "next/link";
import { BOOKING_CTA } from "@/lib/nav";

export default function MobileStickyBar() {
  return (
    <div
      className="fixed inset-x-0 bottom-0 z-40 flex items-center justify-center
                 border-t border-charcoal/10 bg-ivory px-4 lg:hidden"
      style={{ height: "var(--mobile-cta-height)" }}
    >
      <Link href={BOOKING_CTA.href} className="btn-primary w-full">
        {BOOKING_CTA.label}
      </Link>
    </div>
  );
}
