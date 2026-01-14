"use client";

import { useState } from "react";
import Link from "next/link";
import { User, Phone, Mail, Lock, ArrowRight } from "lucide-react";
import { useRouter } from "next/navigation";

export default function SignupPage() {
  const router = useRouter();

  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    phone: "",
    email: "",
    password: "",
    agree: false,
  });

  const [error, setError] = useState<string | null>(null);
  const [sending, setSending] = useState(false);

  function onChange(e: React.ChangeEvent<HTMLInputElement>) {
    const { name, value, type, checked } = e.target;
    setForm((f) => ({ ...f, [name]: type === "checkbox" ? checked : value }));
  }

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    setError(null);

    if (!form.firstName) return setError("First name is required.");
    if (!form.phone) return setError("Mobile number is required.");
    if (!form.email) return setError("Email is required.");
    if (!form.password) return setError("Password is required.");
    if (!form.agree) return setError("Please agree to the Terms & Conditions.");

    setSending(true);

    // 🔐 Simulate OTP send
    setTimeout(() => {
      setSending(false);
      router.push(`/verify-otp?phone=${encodeURIComponent(form.phone)}`);
    }, 900);
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-[#f7f9fc] via-[#eef3fb] to-[#e6eef9] px-4">

      {/* ================= SIGNUP CARD ================= */}
      <div
        className="
          w-full max-w-md
          bg-white
          rounded-2xl
          border border-gray-200
          shadow-[0_10px_30px_rgba(0,0,0,0.08)]
          p-8
        "
      >
        {/* LOGO */}
        <div className="flex justify-center mb-6">
          <img src="/logo.png" alt="OneVriksh" className="w-28" />
        </div>

        {/* TITLE */}
        <h1 className="text-xl font-semibold text-gray-900 text-center">
          Create your account
        </h1>

        <p className="text-sm text-gray-500 text-center mt-2">
          Already have an account?{" "}
          <Link href="/login" className="text-sky-700 hover:underline">
            Login
          </Link>
        </p>

        {/* FORM */}
        <form onSubmit={onSubmit} className="mt-6 space-y-4">

          {/* FIRST + LAST NAME */}
          <div className="flex gap-3">
            <div className="relative w-1/2">
              <User size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
              <input
                name="firstName"
                value={form.firstName}
                onChange={onChange}
                placeholder="First name"
                required
                className="w-full pl-9 pr-3 py-2.5 text-sm border border-gray-300 rounded-lg outline-none focus:border-sky-500 focus:ring-2 focus:ring-sky-200"
              />
            </div>

            <div className="relative w-1/2">
              <User size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
              <input
                name="lastName"
                value={form.lastName}
                onChange={onChange}
                placeholder="Last name"
                className="w-full pl-9 pr-3 py-2.5 text-sm border border-gray-300 rounded-lg outline-none focus:border-sky-500 focus:ring-2 focus:ring-sky-200"
              />
            </div>
          </div>

          {/* PHONE */}
          <div className="relative">
            <Phone size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
            <input
              name="phone"
              value={form.phone}
              onChange={onChange}
              type="tel"
              placeholder="Mobile number"
              required
              className="w-full pl-9 pr-3 py-2.5 text-sm border border-gray-300 rounded-lg outline-none focus:border-sky-500 focus:ring-2 focus:ring-sky-200"
            />
          </div>

          {/* EMAIL (MANDATORY) */}
          <div className="relative">
            <Mail size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
            <input
              name="email"
              value={form.email}
              onChange={onChange}
              type="email"
              placeholder="Email address"
              required
              className="w-full pl-9 pr-3 py-2.5 text-sm border border-gray-300 rounded-lg outline-none focus:border-sky-500 focus:ring-2 focus:ring-sky-200"
            />
          </div>

          {/* PASSWORD */}
          <div className="relative">
            <Lock size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
            <input
              name="password"
              value={form.password}
              onChange={onChange}
              type="password"
              placeholder="Create password"
              required
              className="w-full pl-9 pr-3 py-2.5 text-sm border border-gray-300 rounded-lg outline-none focus:border-sky-500 focus:ring-2 focus:ring-sky-200"
            />
          </div>

          {/* TERMS */}
          <label className="flex items-start gap-2 text-xs text-gray-600">
            <input
              type="checkbox"
              name="agree"
              checked={form.agree}
              onChange={onChange}
              className="mt-0.5"
            />
            I agree to the{" "}
            <Link href="/terms" className="text-sky-700 hover:underline">
              Terms & Conditions
            </Link>
          </label>

          {error && <p className="text-xs text-red-600">{error}</p>}

          {/* SEND OTP */}
          <button
            type="submit"
            disabled={sending}
            className="
              w-full py-2.5 rounded-lg
              bg-sky-600 text-white text-sm font-medium
              flex items-center justify-center gap-2
              hover:bg-sky-700 transition
              disabled:opacity-70
            "
          >
            {sending ? "Sending OTP..." : "Send OTP"}
            {!sending && <ArrowRight size={16} />}
          </button>
        </form>
      </div>
    </div>
  );
}
