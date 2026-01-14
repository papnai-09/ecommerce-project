"use client";

import {
  Laptop,
  Smartphone,
  Headphones,
  Watch,
  BookOpen,
  BookOpenText,
  Lightbulb,
  BadgeCheck,
  ChevronLeft,
  ChevronRight,
  ChevronRight as ArrowSmall,
} from "lucide-react";

import Link from "next/link";
import { useRef } from "react";

/* ================= CATEGORIES ================= */
const categories = [
  { name: "Laptops", icon: Laptop },
  { name: "Mobiles", icon: Smartphone },
  { name: "Headphones", icon: Headphones },
  { name: "Smartwatches", icon: Watch },
  { name: "Academic Books", icon: BookOpen },

  // Professional icons
  { name: "Novels", icon: BookOpenText },
  { name: "Self Help", icon: Lightbulb },
  { name: "Best Sellers", icon: BadgeCheck },
];

export default function HorizontalCategories() {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scrollLeft = () =>
    scrollRef.current?.scrollBy({ left: -350, behavior: "smooth" });

  const scrollRight = () =>
    scrollRef.current?.scrollBy({ left: 350, behavior: "smooth" });

  return (
    <section className="w-[93%] mx-auto mt-10">

      {/* ===== Heading ===== */}
      <div className="flex items-center gap-2 mb-3 group w-fit cursor-pointer">
        <h2 className="text-lg font-semibold transition-all duration-300 group-hover:text-sky-700">
          Shop by Category
        </h2>

        <ArrowSmall
          size={18}
          className="
            text-gray-700
            transition-all duration-300
            group-hover:text-sky-700 group-hover:translate-x-1
          "
        />
      </div>

      {/* ===== Main Container ===== */}
      <div
        className="
          relative rounded-2xl border border-sky-100
          bg-gradient-to-br from-[#f2f7ff] via-[#eef3fb] to-[#e6eef9]
          shadow-[0_6px_25px_rgba(0,0,0,0.06)]
        "
      >
        {/* LEFT ARROW */}
        <button
          onClick={scrollLeft}
          className="
            absolute left-0 top-1/2 -translate-y-1/2 z-20
            p-2 bg-transparent opacity-70
            hover:opacity-100 hover:scale-110 hover:-translate-x-1
            transition-all duration-300
          "
        >
          <ChevronLeft size={32} className="text-black" />
        </button>

        {/* ===== Scroll Area ===== */}
        <div
          ref={scrollRef}
          className="
            flex gap-6 overflow-x-auto scroll-smooth
            no-scrollbar px-14 py-4
          "
        >
          {categories.map((cat) => (
            <Link
              key={cat.name}
              href={`/category/${cat.name.toLowerCase().replace(/\s+/g, "-")}`}
              className="
                min-w-[150px] p-5 rounded-xl
                bg-white border border-gray-200
                flex flex-col items-center
                shadow-sm hover:shadow-lg hover:-translate-y-2
                transition-all duration-300 group
              "
            >
              {/* Icon Box */}
              <div
                className="
                  w-16 h-16 rounded-xl bg-sky-50
                  flex items-center justify-center
                  shadow-sm
                  transition-all duration-300
                  group-hover:bg-sky-100
                "
              >
                <cat.icon
                  size={32}
                  className="
                    text-gray-700
                    transition-all duration-300
                    group-hover:text-sky-700
                  "
                />
              </div>

              {/* Text + Arrow */}
              <div className="flex items-center gap-1 mt-3">
                <span
                  className="
                    text-sm font-medium text-gray-800
                    transition group-hover:text-sky-700
                  "
                >
                  {cat.name}
                </span>

                <ArrowSmall
                  size={14}
                  className="
                    text-gray-600
                    transition-all duration-300
                    group-hover:text-sky-700 group-hover:translate-x-1
                  "
                />
              </div>
            </Link>
          ))}
        </div>

        {/* RIGHT ARROW */}
        <button
          onClick={scrollRight}
          className="
            absolute right-0 top-1/2 -translate-y-1/2 z-20
            p-2 bg-transparent opacity-70
            hover:opacity-100 hover:scale-110 hover:translate-x-1
            transition-all duration-300
          "
        >
          <ChevronRight size={32} className="text-black" />
        </button>
      </div>
    </section>
  );
}
