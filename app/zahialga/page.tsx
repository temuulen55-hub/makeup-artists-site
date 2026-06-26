"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import Cal, { getCalApi } from "@calcom/embed-react";

export default function BookingPage() {
  const router = useRouter();

  useEffect(() => {
    (async function () {
      const cal = await getCalApi({});

      // 1. Setup the UI
      cal("ui", {
        theme: "light",
        styles: {
          branding: {
            brandColor: "#3A2E2A", // Espresso design token
          },
        },
        hideEventTypeDetails: false,
        layout: "month_view",
      });

      // 2. Setup the Redirect on Success
      cal("on", {
        action: "bookingSuccessful",
        callback: (e) => {
          // This automatically fires the moment the user confirms the booking
          router.push("/zahialga/amjilttai");
        },
      });
    })();
  }, [router]);

  return (
    <div className="min-h-screen bg-champagne px-4 py-12 md:px-8">
      <div className="mx-auto max-w-4xl">
        {/* Header Section */}
        <div className="mb-12 text-center">
          <h1 className="font-serif text-4xl font-medium text-charcoal md:text-5xl">
            Цаг захиалах
          </h1>
          <p className="mx-auto mt-4 max-w-xl font-sans text-sm text-charcoal/80">
            Та өөрт тохиромжтой цагаа сонгон баталгаажуулна уу. Цаг сонгосны
            дараа төлбөрийн хуудас руу шилжих болно.
          </p>
        </div>

        {/* Cal.com Embed Container */}
        <div className="min-h-[600px] w-full overflow-hidden rounded-2xl bg-ivory shadow-card">
          <Cal
            calLink="temuulen-e-sg6b0n/makeup-tsag-zahialalt"
            style={{ width: "100%", height: "100%", overflow: "scroll" }}
            config={{ layout: "month_view" }}
          />
        </div>
      </div>
    </div>
  );
}
