"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { Mail, ArrowRight } from "lucide-react";

export default function ForgotPasswordPage() {
  const router = useRouter();
  const [identifier, setIdentifier] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [sending, setSending] = useState(false);

  async function requestOtp() {
    return new Promise<{ ok: boolean }>((res) =>
      setTimeout(() => res({ ok: true }), 900)
    );
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setError(null);

    if (!identifier.trim()) {
      setError("Please enter your email or mobile number.");
      return;
    }

    setSending(true);
    const resp = await requestOtp();
    setSending(false);

    if (resp.ok) {
      router.push(`/verify-otp?identifier=${encodeURIComponent(identifier)}`);
    } else {
      setError("Failed to send OTP. Please try again.");
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-[#f7f9fc] via-[#eef3fb] to-[#e6eef9] px-4">

      {/* ================= CARD ================= */}
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
        <div className="flex justify-center mb-5">
          <img src="/logo.png" alt="OneVriksh" className="w-24" />
        </div>

        {/* TITLE */}
        <h1 className="text-xl font-semibold text-gray-900 text-center">
          Forgot Password
        </h1>

        <p className="text-sm text-gray-500 text-center mt-2">
          Enter your registered email or mobile number to receive an OTP.
        </p>

        {/* FORM */}
        <form onSubmit={handleSubmit} className="mt-6 space-y-4">
          <div className="relative">
            <Mail
              size={18}
              className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
            />
            <input
              type="text"
              placeholder="Email or Mobile Number"
              value={identifier}
              onChange={(e) => setIdentifier(e.target.value)}
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
              autoComplete="username"
            />
          </div>

          {error && (
            <p className="text-xs text-red-600">{error}</p>
          )}

          <button
            type="submit"
            disabled={sending}
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
              disabled:opacity-70
            "
          >
            {sending ? "Sending OTP..." : "Send OTP"}
            {!sending && <ArrowRight size={16} />}
          </button>
        </form>

        {/* FOOT LINKS */}
        <div className="mt-6 text-center">
          <Link
            href="/login"
            className="text-sm text-sky-700 hover:underline"
          >
            Back to Login
          </Link>
        </div>
      </div>
    </div>
  );
}
