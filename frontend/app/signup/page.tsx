"use client";

import { useState } from "react";
import Link from "next/link";

export default function SignupPage() {
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    mobile: "",
    email: "",
    password: "",
    agree: false,
  });

  const [error, setError] = useState<string | null>(null);

  function onChange(e: React.ChangeEvent<HTMLInputElement>) {
    const { name, value, type, checked } = e.target;
    setForm((f) => ({ ...f, [name]: type === "checkbox" ? checked : value }));
  }

  function onSubmit(e: React.FormEvent) {
    e.preventDefault();

    if (!form.mobile) return setError("Mobile number is required.");
    if (!form.password) return setError("Password is required.");
    if (!form.agree) return setError("Please agree to the T&C.");
  }

  return (
    <div className="h-screen w-full flex items-center justify-center bg-[#f5f6fa] px-4 py-6 overflow-hidden">

      {/* CARD — HEIGHT NOW ALWAYS FITS SCREEN */}
      <div className="bg-[#1c1b29] text-white rounded-2xl shadow-xl w-full max-w-3xl h-[92vh] flex overflow-hidden">

        {/* LEFT IMAGE PANEL */}
        <div className="hidden md:flex w-1/3 relative">
          <img
            src="/signup-page-img.png"
            alt="Signup visual"
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/10" />
        </div>

        {/* RIGHT FORM PANEL */}
        <div className="w-full md:w-2/3 flex flex-col items-center justify-center p-6">

          {/* Logo */}
          <img src="/logo.png" alt="Logo" className="w-24 mb-4" />

          {/* FORM CONTENT */}
          <div className="w-full max-w-xs">

            <h1 className="text-2xl font-semibold text-center mb-1">Create an account</h1>

            <p className="text-gray-300 text-xs text-center mb-3">
              Already have an account?{" "}
              <Link href="/login" className="text-purple-400 font-medium">
                Log in
              </Link>
            </p>

            <form onSubmit={onSubmit} className="space-y-3">

              {/* First + Last name */}
              <div className="flex gap-2">
                <input
                  name="firstName"
                  value={form.firstName}
                  onChange={onChange}
                  placeholder="First name"
                  className="w-1/2 bg-gray-100 text-black p-2.5 rounded-md text-sm outline-none"
                />
                <input
                  name="lastName"
                  value={form.lastName}
                  onChange={onChange}
                  placeholder="Last name"
                  className="w-1/2 bg-gray-100 text-black p-2.5 rounded-md text-sm outline-none"
                />
              </div>

              <input
                name="mobile"
                value={form.mobile}
                onChange={onChange}
                type="tel"
                placeholder="Mobile Number (required)"
                className="w-full bg-gray-100 text-black p-2.5 rounded-md text-sm outline-none"
                required
              />

              <input
                name="email"
                value={form.email}
                onChange={onChange}
                type="email"
                placeholder="Email"
                className="w-full bg-gray-100 text-black p-2.5 rounded-md text-sm outline-none"
              />

              <input
                name="password"
                value={form.password}
                onChange={onChange}
                type="password"
                placeholder="Enter your password"
                className="w-full bg-gray-100 text-black p-2.5 rounded-md text-sm outline-none"
                required
              />

              {/* Terms & Conditions */}
              <label className="flex items-center gap-2 text-gray-300 text-xs">
                <input
                  type="checkbox"
                  name="agree"
                  checked={form.agree}
                  onChange={onChange}
                  className="w-4 h-4"
                />
                I agree to the{" "}
                <Link href="/terms" className="text-purple-400 hover:underline">
                  Terms & Conditions
                </Link>
              </label>

              {error && <div className="text-xs text-yellow-300">{error}</div>}

              <button
                type="submit"
                className="w-full bg-purple-600 hover:bg-purple-700 p-2.5 rounded-md text-white text-sm font-medium"
              >
                Create account
              </button>
            </form>

            {/* Divider */}
            <div className="flex items-center my-3">
              <div className="h-[1px] bg-gray-600 w-full"></div>
              <span className="px-2 text-xs text-gray-400">or</span>
              <div className="h-[1px] bg-gray-600 w-full"></div>
            </div>

            {/* Google button */}
            <button className="w-full flex items-center justify-center gap-2 bg-gray-100 text-black p-2.5 rounded-md hover:bg-gray-200 text-sm">
              <img src="/google-img.png" className="w-4" />
              Continue with Google
            </button>

          </div>
        </div>
      </div>
    </div>
  );
}
