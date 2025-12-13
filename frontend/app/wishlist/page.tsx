"use client";

import Image from "next/image";
import Link from "next/link";
import { Trash2, ShoppingCart, Heart } from "lucide-react";
import { useState } from "react";

/* ---------------- SAMPLE WISHLIST DATA ---------------- */
const initialWishlist = [
  {
    id: 1,
    name: "Apple MacBook Air M2",
    image: "/products/laptop.jpg",
    price: 99999,
  },
  {
    id: 2,
    name: "Sony WH-1000XM5 Headphones",
    image: "/products/headphone.jpg",
    price: 29999,
  },
  {
    id: 3,
    name: "Samsung Galaxy Watch 6",
    image: "/products/watch.jpg",
    price: 34999,
  },
];

export default function WishlistPage() {
  const [wishlist, setWishlist] = useState(initialWishlist);

  const removeItem = (id: number) => {
    setWishlist((prev) => prev.filter((item) => item.id !== id));
  };

  const moveToCart = (id: number) => {
    // later: connect with global cart
    removeItem(id);
  };

  return (
    <section className="w-[93%] mx-auto mt-12 mb-20">

      {/* ===== PAGE HEADING ===== */}
      <div className="flex items-center gap-2 mb-6">
        <Heart className="text-sky-600" size={20} />
        <h1 className="text-lg font-semibold">
          My Wishlist ({wishlist.length})
        </h1>
      </div>

      {wishlist.length === 0 ? (
        /* ===== EMPTY WISHLIST ===== */
        <div className="text-center py-24">
          <Heart size={40} className="mx-auto text-gray-300 mb-4" />
          <p className="text-gray-500 mb-4">
            Your wishlist is empty
          </p>
          <Link
            href="/"
            className="text-sky-700 font-medium hover:underline"
          >
            Continue Shopping →
          </Link>
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">

          {wishlist.map((item) => (
            <div
              key={item.id}
              className="
                bg-white border border-gray-200
                rounded-lg p-4
                hover:shadow-md transition
              "
            >
              {/* IMAGE */}
              <div className="relative w-full h-44 mb-4">
                <Image
                  src={item.image}
                  alt={item.name}
                  fill
                  className="object-contain"
                />
              </div>

              {/* PRODUCT NAME */}
              <h3 className="text-sm font-medium text-gray-800 mb-1 line-clamp-2">
                {item.name}
              </h3>

              {/* PRICE */}
              <p className="text-base font-semibold text-gray-900 mb-4">
                ₹{item.price.toLocaleString()}
              </p>

              {/* ACTIONS */}
              <div className="flex items-center justify-between">
                <button
                  onClick={() => removeItem(item.id)}
                  className="
                    flex items-center gap-1
                    text-sm text-gray-500
                    hover:text-red-600 transition
                  "
                >
                  <Trash2 size={16} />
                  Remove
                </button>

                <button
                  onClick={() => moveToCart(item.id)}
                  className="
                    flex items-center gap-1
                    text-sm font-medium
                    text-sky-700 hover:text-sky-800
                    transition
                  "
                >
                  <ShoppingCart size={16} />
                  Move to Cart
                </button>
              </div>
            </div>
          ))}

        </div>
      )}
    </section>
  );
}
