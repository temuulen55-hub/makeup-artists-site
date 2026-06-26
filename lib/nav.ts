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
  name: "Temuulen Makeup",
  phone: "+976 9999 9999",
  phoneHref: "tel:+97699999999",
  email: "temuulen.iphone5@gmail.com",
  emailHref: "mailto:temuulen.iphone5@gmail.com",
  instagram: "https://instagram.com/temulenni",
  facebook: "https://www.facebook.com/temuulenn0503",
  hours: "Даваа–Бямба, 10:00–19:00",
  address: "Сүхбаатар дүүрэг, Улаанбаатар",
};
