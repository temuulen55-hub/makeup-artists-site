import type { Config } from "tailwindcss";

// Дизайны систем — Техникийн тодорхойлолтын 5-р хэсэгт заасан өнгө, типографийн tokens.
// Бүх компонент эндээс л өнгө, фонтоо авна — hardcode hex утга component дотор бичихгүй.
const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        champagne: "#F5EFE6", // Primary background
        ivory: "#FAF7F2", // Section background
        charcoal: "#2B2925", // Text, headings
        "dusty-rose": "#C9A0A0", // Accent / CTA hover
        espresso: "#3A2E2A", // Primary CTA button
        "soft-gold": "#C9A66B", // Highlight, dividers
      },
      fontFamily: {
        // Playfair Display — Кирилл (Cyrillic) дэмжлэгтэй serif, гарчигт
        serif: ["var(--font-display)", "Georgia", "serif"],
        // Inter — Кирилл дэмжлэгтэй sans-serif, body текстэнд
        sans: ["var(--font-body)", "system-ui", "sans-serif"],
      },
      maxWidth: {
        content: "1280px",
      },
      borderRadius: {
        pill: "999px",
      },
      boxShadow: {
        card: "0 4px 24px rgba(43, 41, 37, 0.08)",
      },
    },
  },
  plugins: [],
};

export default config;
