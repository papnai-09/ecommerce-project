"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";

export default function AuthCard({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();

  const isLogin = pathname === "/login";
  const isSignup = pathname === "/signup";

  return (
    <div className="min-h-screen flex items-center justify-center bg-transparent">
      <motion.div
        key={pathname}
        initial={{ x: isLogin ? 300 : -300, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.65, ease: "easeInOut" }}
        className="
          w-[68%] max-w-5xl
          bg-white rounded-3xl shadow-2xl 
          flex overflow-hidden
        "
      >

        {/* IMAGE / DESIGN PANEL */}
        <motion.div
          initial={{ x: isLogin ? -120 : 120, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.7, ease: 'easeOut' }}
          className={`hidden md:flex w-1/2 relative ${isLogin ? "order-1" : "order-2"}`}
        >
          {/* Stronger Blue Background */}
          <div
            className="
              absolute inset-0 bg-gradient-to-br
              from-[#b6e3ff] to-[#58c3ff]
              bg-cover bg-center
            "
          ></div>

          {/* Glass overlay */}
          <div className="absolute inset-0 bg-white/20 backdrop-blur-lg rounded-3xl"></div>

          {/* Buttons */}
          <div className="relative z-10 flex flex-col gap-4 w-full items-center justify-center">
            <Link
              href="/login"
              className={`px-8 py-2 rounded-full font-semibold text-lg transition
                ${
                  isLogin
                    ? "bg-white text-[#38bdf8] shadow-lg"
                    : "text-white border border-white"
                }`}
            >
              Login
            </Link>

            <Link
              href="/signup"
              className={`px-8 py-2 rounded-full font-semibold text-lg transition
                ${
                  isSignup
                    ? "bg-white text-[#38bdf8] shadow-lg"
                    : "text-white border border-white"
                }`}
            >
              Sign Up
            </Link>
          </div>
        </motion.div>

        {/* FORM SIDE */}
        <motion.div
          initial={{ x: isLogin ? 120 : -120, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className={`w-full md:w-1/2 p-10 ${isLogin ? "order-2" : "order-1"}`}
        >
          {children}
        </motion.div>

      </motion.div>
    </div>
  );
}
