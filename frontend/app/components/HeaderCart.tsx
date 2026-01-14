"use client";

import Image from "next/image";
import Link from "next/link";
import { User } from "lucide-react";

export default function HeaderCart() {
  return (
    <header className="w-full sticky top-4 z-50 flex justify-center">
      <div className="w-[93%] max-w-7xl bg-white border border-gray-200 rounded-[2rem] shadow px-4 sm:px-8 py-3 flex justify-between">
        <Link href="/">
          <Image src="/logo.png" alt="OneVriksh" width={96} height={32} className="w-24 sm:w-32" />
        </Link>
        <Link href="/account" className="flex items-center gap-2 text-sm">
          <User size={20} /> <span className="hidden sm:inline">Account</span>
        </Link>
      </div>
    </header>
  );
}
