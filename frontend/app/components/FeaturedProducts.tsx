"use client";

import Image from "next/image";
import Link from "next/link";
import { Star, ChevronRight } from "lucide-react";

const products = [
  {
    id: 1,
    name: "HP Pavilion Laptop",
    image: "/laptop-pavalion.jpg",
    price: "₹64,999",
    oldPrice: "₹74,999",
    rating: 4.5,
    discount: "15% OFF",
  },
  {
    id: 2,
    name: "Samsung Galaxy S23",
    image: "/mobile.jpg",
    price: "₹54,999",
    oldPrice: "₹59,999",
    rating: 4.6,
    discount: "8% OFF",
  },
  {
    id: 3,
    name: "Sony Wireless Headphones",
    image: "/headphone.jpg",
    price: "₹12,999",
    oldPrice: "₹15,999",
    rating: 4.4,
    discount: "20% OFF",
  },
  {
    id: 4,
    name: "Apple Watch Series 9",
    image: "/watch.jpg",
    price: "₹41,999",
    oldPrice: "₹45,999",
    rating: 4.7,
    discount: "10% OFF",
  },
];

export default function FeaturedElectronics() {
  return (
    <section className="w-[93%] mx-auto mt-12">

      {/* ===== Heading (Professional > arrow) ===== */}
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-1 group cursor-pointer">
          <h2 className="text-lg font-semibold transition group-hover:text-sky-700">
            Featured Electronics
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
          href="/electronics"
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
        {/* ===== Product Grid ===== */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {products.map((product) => (
            <Link
              key={product.id}
              href={`/product/${product.id}`}
              className="
                bg-white rounded-xl border border-gray-200
                p-3 group
                hover:shadow-md hover:-translate-y-1
                transition-all duration-300
              "
            >
              {/* Image */}
              <div className="relative w-full h-36 mb-3">
                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  className="object-contain"
                />

                {/* Discount */}
                <span className="absolute top-2 left-2 bg-sky-600 text-white text-[11px] font-semibold px-2 py-0.5 rounded">
                  {product.discount}
                </span>
              </div>

              {/* Name */}
              <h3 className="text-sm font-medium text-gray-800 mb-1 line-clamp-2">
                {product.name}
              </h3>

              {/* Rating */}
              <div className="flex items-center gap-1 text-xs mb-1">
                <Star size={13} className="text-yellow-400 fill-yellow-400" />
                <span className="text-gray-700 font-medium">
                  {product.rating}
                </span>
              </div>

              {/* Price */}
              <div className="flex items-center gap-2">
                <span className="text-sm font-semibold text-gray-900">
                  {product.price}
                </span>
                <span className="text-xs text-gray-500 line-through">
                  {product.oldPrice}
                </span>
              </div>

              {/* CTA with > arrow */}
              <div className="mt-3 flex items-center justify-center gap-1 text-sm font-medium text-sky-700 group">
                View Product
                <ChevronRight
                  size={16}
                  className="transition-transform duration-300 group-hover:translate-x-1"
                />
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
