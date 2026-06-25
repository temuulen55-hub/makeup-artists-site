// Sitemap-ийн дагуу: мэдээлэл → итгэл (portfolio, сэтгэгдэл) → үйлдэл (booking, courses)
// Энэ файлыг Header.tsx, Footer.tsx хоёулаа ашиглана — цэс хоёр газар давхар бичихгүй.

export type NavItem = {
  label: string;
  href: string;
};

export const PRIMARY_NAV: NavItem[] = [
  { label: "Бидний тухай", href: "/bidnii-tuhai" },
  { label: "Бүтээлүүд", href: "/buteeluud" },
  { label: "Сургалт", href: "/surgalt" },
  { label: "Зөвлөгөө", href: "/zovlogoo" },
  { label: "Сэтгэгдэл", href: "/setgegdel" },
  { label: "Холбоо барих", href: "/holboo-barih" },
];

export const BOOKING_CTA: NavItem = {
  label: "Захиалга өгөх",
  href: "/zahialga",
};

export const SITE_CONFIG = {
  name: "Сараа Makeup",
  phone: "+976 9911 2233",
  phoneHref: "tel:+97699112233",
  email: "hello@saraa-makeup.mn",
  emailHref: "mailto:hello@saraa-makeup.mn",
  instagram: "https://instagram.com/saraa.makeup",
  facebook: "https://facebook.com/saraa.makeup",
  hours: "Даваа–Бямба, 10:00–19:00",
  address: "Сүхбаатар дүүрэг, Улаанбаатар",
};
