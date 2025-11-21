"use client";

import Image from "next/image";
import Link from "next/link";
import { Search, Heart, ShoppingCart, User } from "lucide-react";

export default function HeaderAfterLogin() {
  return (
    <header className="w-full bg-transparent sticky top-4 z-50 flex justify-center">
      
      {/* FLOATING ROUNDED HEADER */}
      <div
        className="
          w-[90%] max-w-7xl
          bg-[#f8f6f3]
          rounded-[2.5rem]
          shadow-[0_4px_20px_rgba(0,0,0,0.08)]
          px-10 py-4 
          flex items-center justify-between gap-8
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

        {/* CENTER — SEARCH BAR (Rounded Flipkart style) */}
        <div className="flex-1 flex justify-center">
          <div
            className="
              flex items-center
              w-full max-w-[550px]
              bg-white 
              rounded-2xl
              shadow-sm 
              border border-gray-200
              overflow-hidden
            "
          >
            <Search className="text-gray-600 ml-3" size={22} />

            <input
              type="text"
              placeholder="Search for products, brands and more"
              className="
                flex-1 px-3 py-2 
                bg-white outline-none
              "
            />

            {/* BLUE SEARCH BUTTON */}
            <button
              className="
                bg-[#38bdf8]
                hover:bg-[#0ea5e9]
                text-white 
                font-medium 
                px-5 py-2
                transition
              "
            >
              Search
            </button>
          </div>
        </div>

        {/* RIGHT — Wishlist, Cart, and User Icon (AFTER LOGIN) */}
        <div className="flex items-center gap-6 text-gray-700">
          
          {/* Wishlist */}
          <Heart size={24} className="cursor-pointer hover:text-[#38bdf8]" />

          {/* Cart */}
          <div className="relative cursor-pointer hover:text-[#38bdf8]">
            <ShoppingCart size={24} />
            <span
              className="
                absolute -top-2 -right-2
                bg-[#38bdf8] text-white
                text-xs font-semibold
                w-5 h-5 flex items-center justify-center
                rounded-full
              "
            >
              3
            </span>
          </div>

          {/* USER ACCOUNT ICON (After Login) */}
          <Link href="/account">
            <User
              size={26}
              className="cursor-pointer hover:text-[#38bdf8] transition"
            />
          </Link>

        </div>
      </div>
    </header>
  );
}
