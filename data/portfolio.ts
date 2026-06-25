// data/portfolio.ts

export type Category = "Хурим" | "Гоёлын" | "Өдөр тутмын";

// 1. Base interface for data every item must have
interface BasePortfolioItem {
  id: string;
  title: string;
  category: Category;
}

// 2. Specific interface for Before/After items
interface BeforeAfterItem extends BasePortfolioItem {
  type: "before-after";
  imageBefore: string;
  imageAfter: string;
}

// 3. Specific interface for standard photos (supports multiple angles)
interface GalleryItem extends BasePortfolioItem {
  type: "gallery";
  images: string[]; // An array to hold 1 or more photos
}

// 4. Combine them!
export type PortfolioItem = BeforeAfterItem | GalleryItem;

// 5. The actual data array
export const portfolioData: PortfolioItem[] = [
  {
    id: "Goyliin-01",
    title: "Editorial зураг авалт",
    category: "Гоёлын",
    type: "gallery",
    images: ["/images/portfolio/a1.jpg", "/images/portfolio/a2.jpg"],
  },
  {
    id: "Goyliin-02",
    title: "Баярын зураг авалт",
    category: "Гоёлын",
    type: "gallery",
    images: [
      "/images/portfolio/b1.jpg",
      "/images/portfolio/b2.jpg",
      "/images/portfolio/b3.jpg",
    ],
  },

  {
    id: "Hurimiin-01",
    title: "Хуримын будалт",
    category: "Хурим",
    type: "before-after",
    imageBefore: "/images/portfolio/d1.jgp",
    imageAfter: "/images/portfolio/d2.jpg",
  },

  {
    id: "Engiin-01",
    title: "Өдөр тутмын будалт",
    category: "Өдөр тутмын",
    type: "gallery",
    images: [
      "/images/portfolio/c1.jpg",
      "/images/portfolio/c2.jpg",
      "/images/portfolio/c3.jpg",
      "/images/portfolio/c4.jpg",
    ],
  },
  {
    id: "Engiin-02",
    title: "Сэтгүүлны будалт",
    category: "Гоёлын",
    type: "before-after",
    imageBefore: "/images/portfolio/e1.jgp",
    imageAfter: "/images/portfolio/e2.jpg",
  },

  {
    id: "Engiin-02",
    title: "Цэвэрхэн будалт",
    category: "Өдөр тутмын",
    type: "before-after",
    imageBefore: "/images/portfolio/f1.jgp",
    imageAfter: "/images/portfolio/f2.jpg",
  },
];
