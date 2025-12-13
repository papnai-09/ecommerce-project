"use client";

import Image from "next/image";
import Link from "next/link";
import { ChevronRight } from "lucide-react";

const books = [
  {
    id: 1,
    title: "Atomic Habits",
    author: "James Clear",
    image: "/book1.jpg",
    price: "₹399",
  },
  {
    id: 2,
    title: "Rich Dad Poor Dad",
    author: "Robert Kiyosaki",
    image: "/book2.jpg",
    price: "₹349",
  },
  {
    id: 3,
    title: "The Psychology of Money",
    author: "Morgan Housel",
    image: "/book3.jpg",
    price: "₹299",
  },
  {
    id: 4,
    title: "Think Like a Monk",
    author: "Jay Shetty",
    image: "/book4.jpg",
    price: "₹379",
  },
];

export default function BooksYouMayLike() {
  return (
    <section className="w-[93%] mx-auto mt-12">

      {/* ===== Heading ===== */}
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-1 group cursor-pointer">
          <h2 className="text-lg font-semibold transition group-hover:text-sky-700">
            Books You May Like
          </h2>
          <ChevronRight
            size={18}
            className="
              text-gray-700
              transition-all duration-300
              group-hover:text-sky-700 group-hover:translate-x-1
            "
          />
        </div>

        <Link
          href="/books"
          className="flex items-center gap-1 text-sm font-medium text-sky-700 group"
        >
          View All
          <ChevronRight
            size={16}
            className="transition-transform duration-300 group-hover:translate-x-1"
          />
        </Link>
      </div>

      {/* ===== Container ===== */}
      <div
        className="
          rounded-2xl px-4 py-4
          bg-gradient-to-br from-[#f2f7ff] via-[#eef3fb] to-[#e6eef9]
          border border-sky-100
          shadow-[0_6px_25px_rgba(0,0,0,0.06)]
        "
      >
        {/* ===== Book Grid ===== */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
          {books.map((book) => (
            <Link
              key={book.id}
              href={`/book/${book.id}`}
              className="
                bg-white rounded-xl border border-gray-200
                p-3 group
                hover:shadow-md hover:-translate-y-1
                transition-all duration-300
              "
            >
              {/* Book Image */}
              <div className="relative w-full h-40 mb-3">
                <Image
                  src={book.image}
                  alt={book.title}
                  fill
                  className="object-contain"
                />
              </div>

              {/* Title */}
              <h3 className="text-sm font-medium text-gray-800 mb-0.5 line-clamp-2">
                {book.title}
              </h3>

              {/* Author */}
              <p className="text-xs text-gray-500 mb-1">
                {book.author}
              </p>

              {/* Price + Arrow */}
              <div className="flex items-center justify-between mt-2">
                <span className="text-sm font-semibold text-gray-900">
                  {book.price}
                </span>

                <ChevronRight
                  size={16}
                  className="
                    text-gray-600
                    transition-transform duration-300
                    group-hover:text-sky-700 group-hover:translate-x-1
                  "
                />
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
