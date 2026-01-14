"use client";

import Image from "next/image";
import Link from "next/link";
import { Search, Heart, ShoppingCart, User } from "lucide-react";

export default function HeaderBeforeLogin() {
  return (
    <header className="w-full sticky top-4 z-50 flex justify-center">
      <div className="w-[93%] max-w-7xl bg-white border border-gray-200 rounded-[2.2rem] shadow-[0_6px_20px_rgba(0,0,0,0.12)] px-8 py-3 flex items-center gap-6">
        
        <Link href="/">
          <Image src="/logo.png" alt="OneVriksh" width={135} height={40} />
        </Link>

        <div className="flex-1 hidden md:flex justify-center">
          <div className="w-full max-w-xl flex items-center border border-gray-300 rounded-full overflow-hidden bg-white">
            <input className="flex-1 px-4 py-2.5 text-sm outline-none" placeholder="Search products" />
            <button className="h-full px-6 bg-sky-600 text-white hover:bg-sky-700">
              <Search size={18} />
            </button>
          </div>
        </div>

        <div className="flex items-center gap-5 text-gray-700">
          <Link href="/login-required"><Heart size={22} /></Link>
          <Link href="/login-required"><ShoppingCart size={22} /></Link>
          <Link href="/login" className="px-5 py-2 bg-sky-600 text-white rounded-full flex gap-2">
            <User size={18} /> Login
          </Link>
        </div>
      </div>
    </header>
  );
}
