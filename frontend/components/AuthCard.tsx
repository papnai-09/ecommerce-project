"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";

export default function AuthCard({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();

  const isLogin = pathname === "/login";
  const isSignup = pathname === "/signup";

  return (
    <motion.div className="min-h-screen flex items-center justify-center p-4 bg-gray-100">
      <motion.div
        initial={{ scale: 0.92, y: 30 }}
        animate={{ scale: 1, y: 0 }}
        transition={{ duration: 0.45, ease: "easeOut" }}
        className="w-[60%] max-w-4xl bg-white rounded-2xl shadow-2xl flex overflow-hidden"
      >
        {/* LEFT GRADIENT PANEL */}
        <motion.div
          initial={{ x: -50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.45 }}
          className="hidden md:flex w-1/3 bg-linear-to-b from-blue-300 to-blue-800 
                     flex-col items-center justify-start relative py-10"
        >
          {/* Glass Blur Effect */}
          <div className="absolute inset-0 bg-white/10 backdrop-blur-sm"></div>

          {/* LOGO */}
          <img
            src="/logo.png" 
            alt="Logo"
            className="w-40 h-40 object-contain relative z-10 mb-8 -mt-16"
          />

          {/* BUTTON SECTION */}
          <div className="relative z-10 flex flex-col gap-2 w-full items-end">

            {/* LOGIN BUTTON */}
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.98 }}>
              <Link
                href="/login"
                className={`block w-[95px] text-center p-2 rounded-full font-semibold text-md transition-all duration-300
                  ${
                    isLogin
                      ? "bg-white text-blue-500 translate-x-4"
                      : "text-white translate-x-2"
                  }`}
              >
                Login
              </Link>
            </motion.div>

            {/* SIGNUP BUTTON */}
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.98 }}>
              <Link
                href="/signup"
                className={`block w-[95px] text-center p-2 rounded-full font-semibold text-md transition-all duration-300
                  ${
                    isSignup
                      ? "bg-white text-blue-500 translate-x-4"
                      : "text-white translate-x-2"
                  }`}
              >
                Sign Up
              </Link>
            </motion.div>

          </div>
        </motion.div>

        {/* RIGHT CONTENT */}
        <motion.div
          initial={{ x: 50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.45 }}
          className="w-full md:w-2/3 p-10"
        >
          {children}
        </motion.div>
      </motion.div>
    </motion.div>
  );
}
