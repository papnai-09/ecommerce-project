"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";

export default function ForgotPasswordPage() {
  const router = useRouter();
  const [identifier, setIdentifier] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [sending, setSending] = useState(false);

  // Simulated API call to request OTP (client-side only)
  async function requestOtp(id: string) {
    return new Promise<{ ok: boolean }>((res) =>
      setTimeout(() => res({ ok: true }), 900)
    );
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setError(null);

    const trimmed = identifier.trim();
    if (!trimmed) {
      setError("Please enter your email or mobile number.");
      return;
    }

    setSending(true);
    try {
      const resp = await requestOtp(trimmed);
      if (resp.ok) {
        // navigate to verify page and pass identifier in URL (no storage)
        const encoded = encodeURIComponent(trimmed);
        router.push(`/verify-otp?identifier=${encoded}`);
      } else {
        setError("Could not send OTP. Try again later.");
      }
    } catch (err) {
      setError("Network error. Try again.");
    } finally {
      setSending(false);
    }
  }

  return (
    <div className="h-screen w-full flex items-center justify-center bg-[#f5f6fa] px-4 py-6 overflow-hidden">
      <div className="bg-[#1c1b29] text-white rounded-2xl shadow-xl w-full max-w-3xl h-[92vh] flex overflow-hidden">
        <div className="hidden md:flex w-1/3 relative">
          <img
            src="/reset-page-img.png"
            alt="Forgot visual"
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/10" />
        </div>

        <div className="w-full md:w-2/3 flex flex-col items-center justify-center p-6">
          <img src="/logo.png" alt="Logo" className="w-24 mb-5" />

          <div className="w-full max-w-xs">
            <h1 className="text-2xl font-semibold text-center mb-2">Forgot Password</h1>

            <p className="text-gray-300 text-xs text-center mb-4">
              Enter your email or mobile number to receive an OTP.
            </p>

            <form onSubmit={handleSubmit} className="space-y-3">
              <input
                type="text"
                placeholder="Email or Mobile Number"
                value={identifier}
                onChange={(e) => setIdentifier(e.target.value)}
                className="w-full bg-gray-100 text-black p-2.5 rounded-md text-sm outline-none"
                autoComplete="username"
              />

              {error && <div className="text-xs text-yellow-300">{error}</div>}

              <button
                type="submit"
                disabled={sending}
                className={`w-full ${
                  sending ? "bg-purple-500/80" : "bg-purple-600 hover:bg-purple-700"
                } p-2.5 rounded-md text-white text-sm font-medium`}
              >
                {sending ? "Sending OTP..." : "Send OTP"}
              </button>
            </form>

            <div className="text-center mt-4">
              <Link href="/login" className="text-purple-400 text-sm">
                Back to Login
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
