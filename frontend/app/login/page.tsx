"use client";

import Link from "next/link";

export default function LoginPage() {
  return (
    <div className="h-screen w-full flex items-center justify-center bg-[#f5f6fa] px-4 overflow-hidden">
      
      {/* MAIN DARK CARD */}
      <div className="bg-[#1c1b29] text-white rounded-2xl overflow-hidden shadow-2xl max-w-3xl w-full mx-auto">
        <div className="flex h-full">

          {/* LEFT IMAGE PANEL */}
          <div className="hidden md:flex w-1/3 relative bg-[#1c1b29]">
            <img
              src="/login-page-img.png"
              alt="Login side visual"
              className="absolute inset-0 w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black/10" />
          </div>

          {/* RIGHT FORM PANEL */}
          <div className="w-full md:w-2/3 flex flex-col items-center justify-center p-8">

            {/* LOGO */}
            <img src="/logo.png" alt="Logo" className="w-28 h-auto mb-6" />

            {/* FORM CONTENT */}
            <div className="w-full max-w-xs space-y-5">

              {/* HEADING */}
              <h1 className="text-3xl font-semibold text-center">Welcome back</h1>

              {/* SIGNUP LINK */}
              <p className="text-gray-300 text-sm text-center">
                New here?{" "}
                <Link href="/signup" className="text-purple-400 font-medium">
                  Create an account
                </Link>
              </p>

              {/* LOGIN FORM */}
              <form className="space-y-3">

                <input
                  type="text"
                  placeholder="Mobile number or email"
                  className="w-full bg-gray-100 text-black p-3 rounded-lg text-sm outline-none"
                  required
                />

                <input
                  type="password"
                  placeholder="Password"
                  className="w-full bg-gray-100 text-black p-3 rounded-lg text-sm outline-none"
                  required
                />

                <div className="flex items-center justify-between text-sm">
                  <label className="flex items-center gap-2 text-gray-300">
                    <input type="checkbox" className="w-4 h-4" />
                    Remember me
                  </label>

                  <Link href="/forgot-password" className="text-purple-400">
                    Forgot password?
                  </Link>
                </div>

                <button
                  type="submit"
                  className="w-full bg-purple-600 hover:bg-purple-700 p-3 rounded-lg text-white font-medium"
                >
                  Log in
                </button>
              </form>

              {/* DIVIDER */}
              <div className="flex items-center my-1">
                <div className="h-[1px] bg-gray-600 w-full"></div>
                <span className="px-2 text-sm text-gray-400">or</span>
                <div className="h-[1px] bg-gray-600 w-full"></div>
              </div>

              {/* GOOGLE BUTTON */}
              <button className="w-full flex items-center justify-center gap-3 bg-gray-100 text-black p-3 rounded-lg hover:bg-gray-200 text-sm">
                <img src="/google-img.png" className="w-5" alt="google" />
                Continue with Google
              </button>

              {/* TERMS */}
              <p className="text-xs text-gray-400 text-center">
                By continuing, you agree to our{" "}
                <Link href="/terms" className="text-purple-400">
                  Terms & Conditions
                </Link>
                .
              </p>

            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
