"use client";

import Link from "next/link";
import { Lock, ArrowRight } from "lucide-react";

export default function LoginRequiredPage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-[#f7f9fc] via-[#eef3fb] to-[#e6eef9] px-4">

      {/* CARD */}
      <div
        className="
          w-full max-w-md
          bg-white
          rounded-2xl
          border border-gray-200
          shadow-[0_10px_30px_rgba(0,0,0,0.08)]
          p-8
          text-center
        "
      >
        {/* ICON */}
        <div className="flex justify-center mb-4">
          <div className="w-14 h-14 flex items-center justify-center rounded-full bg-sky-100">
            <Lock size={26} className="text-sky-600" />
          </div>
        </div>

        {/* TITLE */}
        <h1 className="text-lg font-semibold text-gray-900">
          Login Required
        </h1>

        {/* SUBTITLE */}
        <p className="text-sm text-gray-500 mt-2">
          Please log in to access your cart and wishlist.
        </p>

        {/* ACTION */}
        <Link
          href="/login"
          className="
            mt-6
            inline-flex items-center justify-center gap-2
            w-full
            py-2.5
            rounded-lg
            bg-sky-600
            text-white
            text-sm font-medium
            hover:bg-sky-700
            transition
          "
        >
          Login Now
          <ArrowRight size={16} />
        </Link>

        {/* SECONDARY */}
        <Link
          href="/"
          className="
            block mt-4
            text-sm
            text-gray-500
            hover:text-sky-600
            transition
          "
        >
          Continue Browsing
        </Link>
      </div>
    </div>
  );
}
