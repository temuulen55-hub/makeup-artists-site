"use client";

import { useState } from "react";
import Image from "next/image";
import {
  ReactCompareSlider,
  ReactCompareSliderImage,
} from "react-compare-slider";
import { portfolioData, Category, PortfolioItem } from "@/data/portfolio";

export default function PortfolioPage() {
  // Active category filter state (null means "Show All")
  const [activeCategory, setActiveCategory] = useState<Category | null>(null);

  const categories: Category[] = ["Хурим", "Гоёлын", "Өдөр тутмын"];

  // Filter items based on user selection
  const filteredData = activeCategory
    ? portfolioData.filter((item) => item.category === activeCategory)
    : portfolioData;

  return (
    <div className="min-h-screen bg-champagne px-4 py-12 md:px-8">
      <div className="mx-auto max-w-content">
        {/* Header Section */}
        <div className="mb-12 text-center">
          <h1 className="font-serif text-4xl font-medium text-charcoal md:text-5xl">
            Бүтээлийн цомог
          </h1>
          <p className="mt-4 font-sans text-sm text-charcoal/60">
            Мэргэжлийн түвшинд урласан гоо үзэсгэлэнт охидууд маань
          </p>
        </div>

        {/* Category Filters */}
        <div className="mb-12 flex flex-wrap justify-center gap-3">
          <button
            onClick={() => setActiveCategory(null)}
            className={`rounded-full px-6 py-2 font-sans text-sm font-medium transition-all ${
              activeCategory === null
                ? "bg-espresso text-champagne"
                : "border border-charcoal/20 bg-transparent text-charcoal hover:border-charcoal"
            }`}
          >
            Бүгд
          </button>
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`rounded-full px-6 py-2 font-sans text-sm font-medium transition-all ${
                activeCategory === cat
                  ? "bg-espresso text-champagne"
                  : "border border-charcoal/20 bg-transparent text-charcoal hover:border-charcoal"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Dynamic Portfolio Grid */}
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {filteredData.map((item) => (
            <div
              key={item.id}
              className="overflow-hidden rounded-2xl bg-ivory p-4 shadow-card transition-transform duration-300 hover:-translate-y-1"
            >
              {/* Conditional Rendering based on item type */}
              {item.type === "before-after" ? (
                // 1. Render Before/After Slider
                <div className="relative aspect-[3/4] w-full overflow-hidden rounded-xl">
                  <ReactCompareSlider
                    position={15}
                    itemOne={
                      <ReactCompareSliderImage
                        src={item.imageBefore}
                        alt="Өмнө"
                        style={{ objectFit: "cover" }}
                      />
                    }
                    itemTwo={
                      <ReactCompareSliderImage
                        src={item.imageAfter}
                        alt="Дараа"
                        style={{ objectFit: "cover" }}
                      />
                    }
                    className="h-full w-full"
                  />
                  <div className="pointer-events-none absolute bottom-3 left-3 rounded-md bg-charcoal/70 px-2 py-1 text-xs text-champagne">
                    Өмнө / Дараа
                  </div>
                </div>
              ) : (
                // 2. Render Gallery Grid (Multiple Angles)
                <div className="space-y-2">
                  {/* Main Display Image */}
                  <div className="relative aspect-[3/4] w-full overflow-hidden rounded-xl">
                    <Image
                      src={item.images[0]}
                      alt={item.title}
                      fill
                      sizes="(max-width: 768px) 100vw, 33vw"
                      className="object-cover"
                    />
                  </div>
                  {/* Sub-images (Other angles) if they exist */}
                  {item.images.length > 1 && (
                    <div className="grid grid-cols-3 gap-2">
                      {item.images.slice(1).map((img, index) => (
                        <div
                          key={index}
                          className="relative aspect-square overflow-hidden rounded-lg bg-charcoal/10"
                        >
                          <Image
                            src={img}
                            alt={`${item.title} өнцөг ${index + 2}`}
                            fill
                            sizes="10vw"
                            className="object-cover"
                          />
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              )}

              {/* Card Meta Content */}
              <div className="mt-4">
                <span className="font-sans text-xs font-semibold tracking-wider text-soft-gold uppercase">
                  {item.category}
                </span>
                <h3 className="mt-1 font-serif text-lg font-medium text-charcoal">
                  {item.title}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
