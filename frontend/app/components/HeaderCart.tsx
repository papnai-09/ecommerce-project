"use client";

import Image from "next/image";
import Link from "next/link";
import { User } from "lucide-react";

export default function HeaderCartFloating() {
  return (
    <header className="w-full sticky top-4 z-50 flex justify-center">
      {/* FLOATING HEADER */}
      <div
        className="
          w-[93%] max-w-7xl
          bg-white
          border border-gray-200
          rounded-[2rem]
          shadow-[0_6px_20px_rgba(0,0,0,0.12)]
          px-8 py-3
          flex items-center justify-between
        "
      >
        {/* LOGO */}
        <Link href="/" className="flex items-center">
          <Image
            src="/logo.png"
            alt="OneVriksh"
            width={130}
            height={40}
            className="object-contain"
          />
        </Link>

        {/* ACCOUNT */}
        <Link
          href="/account"
          className="
            flex items-center gap-2
            text-sm font-medium text-gray-700
            hover:text-sky-700
            transition
          "
        >
          <User size={20} />
          <span className="hidden sm:inline">Account</span>
        </Link>
      </div>
    </header>
  );
}
