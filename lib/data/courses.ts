export type Course = {
  slug: string;
  level: "Beginner" | "Pro" | "Masterclass";
  title: string;
  duration: string;
  price: string;
  groupSize: string;
  description: string;
  curriculum: string[];
};

export const COURSES: Course[] = [
  {
    slug: "anhan-shatny-meikap",
    level: "Beginner",
    title: "Анхан шатны мэйкап сургалт",
    duration: "5 өдөр",
    price: "450,000₮",
    groupSize: "6 хүртэл хүн",
    description:
      "Өдөр тутмын мэйкапын үндэс — арьс бэлтгэл, foundation сонголт, энгийн нүд будалт, эрэмбэ дараалал. Хувийн хэрэглээнд зориулсан анхан шатны мэдлэг.",
    curriculum: [
      "Арьсны төрөл тодорхойлох, бэлтгэл хийх",
      "Foundation, concealer — өнгө таарах зарчим",
      "Өдөр тутмын нүдний мэйкап",
      "Хөмсөг засах, хэлбэржүүлэх",
      "Бат бөх байлгах техник (setting)",
    ],
  },
  {
    slug: "pro-artist-masterclass",
    level: "Pro",
    title: "Pro Artist Masterclass",
    duration: "2 долоо хоног",
    price: "1,200,000₮",
    groupSize: "4 хүртэл хүн",
    description:
      "Мэргэжлийн түвшинд үйлчлүүлэгчтэй ажиллах, гэрэлтэй орчинд зургийн мэйкап хийх, эвентийн өндөр ачаалалтай нөхцөлд цаг тооцох ур чадвар.",
    curriculum: [
      "Чанартай, photo-ready мэйкапын техник",
      "Гэрэл, камерт тохирсон өнгөний онол",
      "Үйлчлүүлэгчтэй харилцах, зөвлөгөө өгөх",
      "Баяр, эвентийн групп ажиллагаа",
      "Багаж арчилгаа, эрүүл ахуй",
      "Үнэ тариф тогтоох, бизнес үндэс",
    ],
  },
  {
    slug: "suit-busguin-meikap-masterclass",
    level: "Masterclass",
    title: "Сүйт бүсгүйн мэйкап Masterclass",
    duration: "1 долоо хоног",
    price: "850,000₮",
    groupSize: "4 хүртэл хүн",
    description:
      "Сүйт бүсгүйн өдрийн стресст тэсвэртэй, урт хугацаанд тогтвортой мэйкап хийх тусгай арга барил. Trial session зохион байгуулах, харилцаа холбоо.",
    curriculum: [
      "Сүйт бүсгүйн арьсны тусгай бэлтгэл",
      "12+ цаг тогтвортой байх техник",
      "Уйлах, тэвэрлэх зэрэгт тэсвэртэй setting",
      "Trial session зохион байгуулалт",
      "Өдрийн цагийн менежмент checklist",
    ],
  },
];
