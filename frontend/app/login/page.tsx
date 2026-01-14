"use client";

import { useRouter } from "next/navigation";
import { useState, FormEvent } from "react";
import { useAuth } from "../context/AuthContext";
import Link from "next/link";
import { Mail, Lock, ArrowRight } from "lucide-react";

export default function LoginPage() {
  const router = useRouter();
  const { login } = useAuth();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  async function submit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setLoading(true);
    try {
      const res = await fetch("http://localhost:8000/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });
      if (!res.ok) throw new Error("Login failed");
      const data = await res.json();
      login(data.access_token);
      // redirect to admin if admin
      const payload = JSON.parse(atob(data.access_token.split('.')[1]));
      if (payload.role === 'admin') router.replace('/admin');
      else router.replace('/');
    } catch (err: unknown) {
      const message = err instanceof Error ? err.message : String(err);
      alert(message || 'Login failed');
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-[#f7f9fc] via-[#eef3fb] to-[#e6eef9] px-4">

      {/* ================= LOGIN CARD ================= */}
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
          <img src="/logo.png" alt="OneVriksh" className="w-24 sm:w-28" />
        </div>

        {/* TITLE */}
        <h1 className="text-xl font-semibold text-gray-900 text-center">
          Welcome back
        </h1>

        <p className="text-sm text-gray-500 text-center mt-2">
          Login to continue shopping with OneVriksh
        </p>

        {/* FORM */}
        <form onSubmit={submit} className="mt-6 space-y-4">
          {/* EMAIL / MOBILE */}
          <div className="relative">
            <Mail
              size={18}
              className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
            />
            <input
              type="text"
              placeholder="Email or mobile number"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="
                w-full pl-10 pr-3 py-2.5
                text-sm
                border border-gray-300
                rounded-lg
                outline-none
                focus:border-sky-500
                focus:ring-2 focus:ring-sky-200
                transition
              "
            />
          </div>

          {/* PASSWORD */}
          <div className="relative">
            <Lock
              size={18}
              className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
            />
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className="
                w-full pl-10 pr-3 py-2.5
                text-sm
                border border-gray-300
                rounded-lg
                outline-none
                focus:border-sky-500
                focus:ring-2 focus:ring-sky-200
                transition
              "
            />
          </div>

          {/* REMEMBER + FORGOT */}
          <div className="flex items-center justify-between text-sm">
            <label className="flex items-center gap-2 text-gray-600">
              <input type="checkbox" className="w-4 h-4" />
              Remember me
            </label>

            <Link
              href="/forgot-password"
              className="text-sky-700 hover:underline"
            >
              Forgot password?
            </Link>
          </div>

          {/* LOGIN BUTTON */}
          <button
            type="submit"
            disabled={loading}
            className="
              w-full
              py-2.5
              rounded-lg
              bg-sky-600
              text-white
              font-medium
              text-sm
              flex items-center justify-center gap-2
              hover:bg-sky-700
              transition
            "
          >
            {loading ? 'Logging in…' : 'Login'}
            <ArrowRight size={16} />
          </button>
        </form>

        {/* DIVIDER */}
        <div className="flex items-center my-6">
          <div className="flex-1 h-px bg-gray-200" />
          <span className="px-3 text-xs text-gray-400">OR</span>
          <div className="flex-1 h-px bg-gray-200" />
        </div>

        {/* GOOGLE LOGIN */}
        <button
          className="
            w-full
            flex items-center justify-center gap-3
            border border-gray-300
            py-2.5 rounded-lg
            text-sm font-medium
            hover:bg-gray-50
            transition
          "
        >
          <img src="/google-img.png" className="w-5" alt="google" />
          Continue with Google
        </button>

        {/* SIGNUP */}
        <p className="text-sm text-center text-gray-500 mt-6">
          New here?{" "}
          <Link href="/signup" className="text-sky-700 hover:underline">
            Create an account
          </Link>
        </p>

        {/* TERMS */}
        <p className="text-xs text-gray-400 text-center mt-4">
          By continuing, you agree to our{" "}
          <Link href="/terms" className="text-sky-600 hover:underline">
            Terms & Conditions
          </Link>
          .
        </p>
      </div>
    </div>
  );
}
