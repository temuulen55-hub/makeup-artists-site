"use client";

import { useState } from "react";
import { QRCodeSVG } from "qrcode.react";
import { BANK_TRANSFER_INFO, PAYMENT_INSTRUCTION } from "@/lib/data/payment";

type Props = {
  /** Жишээ нь: "Анхан шатны мэйкап сургалт" эсвэл "Цаг захиалгын урьдчилгаа" */
  label: string;
  /** Жишээ нь: "450,000₮" */
  amount: string;
  /** Захиалгын хуудсанд QR код харуулна, сургалтын төлбөрт шаардлагагүй */
  showQr?: boolean;
};

export default function BankTransferCard({
  label,
  amount,
  showQr = false,
}: Props) {
  const [copiedField, setCopiedField] = useState<string | null>(null);

  // QR код нь дансны мэдээллийг текст хэлбэрээр кодлоно — гар утасны камер/QR
  // уншигчаар уншихад дугаар, нэрийг хурдан харуулна (банкны "scan-to-pay"
  // тусгай формат биш, зүгээр л мэдээллийг хурдан дамжуулах энгийн QR).
  const qrPayload = [
    BANK_TRANSFER_INFO.bankName,
    BANK_TRANSFER_INFO.accountNumber,
    BANK_TRANSFER_INFO.accountHolderName,
    `Дүн: ${amount}`,
  ].join("\n");

  async function copyToClipboard(value: string, field: string) {
    try {
      await navigator.clipboard.writeText(value);
      setCopiedField(field);
      setTimeout(
        () => setCopiedField((current) => (current === field ? null : current)),
        1800,
      );
    } catch {
      // Clipboard API хориглогдсон орчинд (зарим webview) алдаа гарвал
      // зүгээр дугаарыг гараар хуулахад нь саад болохгүй — UI эвдрэхгүй.
    }
  }

  return (
    <div className="rounded-2xl border border-charcoal/10 bg-white/40 p-6 lg:p-8">
      <div className="flex items-center justify-between gap-4 border-b border-charcoal/10 pb-5">
        <div>
          <p className="font-sans text-xs uppercase tracking-wide text-charcoal/50">
            {label}
          </p>
          <p className="mt-1 font-serif text-2xl text-charcoal">{amount}</p>
        </div>
        {showQr && (
          <div className="rounded-xl border border-charcoal/10 bg-white p-2">
            <QRCodeSVG
              value={qrPayload}
              size={88}
              bgColor="#FFFFFF"
              fgColor="#2B2925"
            />
          </div>
        )}
      </div>

      <dl className="mt-5 space-y-4">
        <BankField
          label="Банк"
          value={BANK_TRANSFER_INFO.bankName}
          onCopy={() => copyToClipboard(BANK_TRANSFER_INFO.bankName, "bank")}
          copied={copiedField === "bank"}
        />
        <BankField
          label="Дансны дугаар"
          value={BANK_TRANSFER_INFO.accountNumber}
          onCopy={() =>
            copyToClipboard(BANK_TRANSFER_INFO.accountNumber, "account")
          }
          copied={copiedField === "account"}
        />
        <BankField
          label="Хүлээн авагч"
          value={BANK_TRANSFER_INFO.accountHolderName}
          onCopy={() =>
            copyToClipboard(BANK_TRANSFER_INFO.accountHolderName, "name")
          }
          copied={copiedField === "name"}
        />
      </dl>

      <div className="mt-6 flex items-start gap-3 rounded-xl bg-dusty-rose/15 p-4">
        <svg
          width="18"
          height="18"
          viewBox="0 0 24 24"
          fill="none"
          className="mt-0.5 shrink-0 text-dusty-rose"
          aria-hidden="true"
        >
          <circle
            cx="12"
            cy="12"
            r="9"
            stroke="currentColor"
            strokeWidth="1.5"
          />
          <path
            d="M12 8v5"
            stroke="currentColor"
            strokeWidth="1.6"
            strokeLinecap="round"
          />
          <circle cx="12" cy="16" r="0.9" fill="currentColor" />
        </svg>
        <p className="font-sans text-sm leading-relaxed text-charcoal/80">
          <strong className="font-medium text-charcoal">Анхаар:</strong>{" "}
          {PAYMENT_INSTRUCTION}
        </p>
      </div>
    </div>
  );
}

function BankField({
  label,
  value,
  onCopy,
  copied,
}: {
  label: string;
  value: string;
  onCopy: () => void;
  copied: boolean;
}) {
  return (
    <div className="flex items-center justify-between gap-4">
      <div>
        <dt className="font-sans text-xs text-charcoal/50">{label}</dt>
        <dd className="mt-0.5 font-sans text-base font-medium text-charcoal">
          {value}
        </dd>
      </div>
      <button
        type="button"
        onClick={onCopy}
        className="shrink-0 rounded-pill border border-charcoal/15 px-3.5 py-1.5 font-sans text-xs font-medium text-charcoal/70 transition-colors hover:border-dusty-rose hover:text-dusty-rose"
      >
        {copied ? "Хуулсан ✓" : "Хуулах"}
      </button>
    </div>
  );
}
