"use client";

import Image from "next/image";
import Link from "next/link";
import { Search, Heart, ShoppingCart } from "lucide-react";

export default function Header() {
  return (
    <header className="w-full sticky top-4 z-50 flex justify-center">
      
      {/* FLOATING ROUNDED WHITE HEADER */}
      <div
        className="
          w-[90%] max-w-7xl
          bg-white
          border border-gray-200
          rounded-[2.2rem]
          shadow-[0_6px_20px_rgba(0,0,0,0.10)]
          px-10 py-4
          flex items-center justify-between gap-8
          transition-all
        "
      >
        {/* LEFT — LOGO */}
        <Image
          src="/logo.png"
          alt="Logo"
          width={140}
          height={40}
          className="object-contain"
        />

        {/* CENTER — SEARCH BAR */}
        <div className="flex-1 flex justify-center">
          <div
            className="
              flex items-center
              w-full max-w-[550px]
              bg-gray-100
              rounded-xl
              border border-gray-300
              overflow-hidden
            "
          >
            <Search className="text-gray-600 ml-3" size={20} />

            <input
              type="text"
              placeholder="Search electronics, books, accessories..."
              className="
                flex-1 px-3 py-2
                bg-transparent text-gray-800
                placeholder-gray-500
                outline-none
              "
            />

            <button
              className="
                bg-blue-600
                hover:bg-blue-700
                text-white font-medium
                px-5 py-2
                transition
              "
            >
              Search
            </button>
          </div>
        </div>

        {/* RIGHT SIDE — ICONS + LOGIN */}
        <div className="flex items-center gap-6 text-gray-700">

          {/* Wishlist Icon */}
          <Heart
            size={22}
            className="cursor-pointer hover:text-blue-600 transition"
          />

          {/* Cart Icon */}
          <div className="relative cursor-pointer hover:text-blue-600 transition">
            <ShoppingCart size={22} />
            <span
              className="
                absolute -top-2 -right-2
                bg-blue-600 text-white
                text-xs font-semibold
                w-5 h-5 flex items-center justify-center
                rounded-full
              "
            >
              3
            </span>
          </div>

          {/* Login Button */}
          <Link href="/login">
            <button
              className="
                px-6 py-2
                bg-blue-600 text-white rounded-full
                hover:bg-blue-700 transition
                font-medium
              "
            >
              Login / Signup
            </button>
          </Link>

        </div>
      </div>
    </header>
  );
}
