"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { useRouter, useSearchParams } from "next/navigation";

export default function VerifyOtpPage() {
  const router = useRouter();
  const params = useSearchParams();
  const identifier = params?.get("identifier") ?? null;

  const [otp, setOtp] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [verifying, setVerifying] = useState(false);

  // resend cooldown state
  const [cooldown, setCooldown] = useState<number>(0);

  useEffect(() => {
    let t: number | undefined;
    if (cooldown > 0) {
      t = window.setTimeout(() => setCooldown((c) => c - 1), 1000);
    }
    return () => {
      if (t) window.clearTimeout(t);
    };
  }, [cooldown]);

  // simulate API verify
  async function verifyOtpApi(enteredOtp: string) {
    return new Promise<{ ok: boolean }>((res) =>
      setTimeout(() => {
        res({ ok: enteredOtp.trim().length >= 4 });
      }, 800)
    );
  }

  // simulate resend API
  async function resendOtpApi(id?: string) {
    return new Promise<{ ok: boolean }>((res) =>
      setTimeout(() => res({ ok: true }), 800)
    );
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setError(null);

    if (otp.trim().length < 4) {
      setError("Please enter a valid OTP (min 4 digits).");
      return;
    }

    setVerifying(true);
    try {
      const r = await verifyOtpApi(otp.trim());
      if (r.ok) {
        // success -> navigate to reset-password; no storage used
        router.push("/reset-password");
      } else {
        setError("Incorrect OTP. Please try again.");
      }
    } catch {
      setError("Network error. Try again.");
    } finally {
      setVerifying(false);
    }
  }

  async function handleResend() {
    if (cooldown > 0) return;
    setError(null);

    try {
      const resp = await resendOtpApi(identifier ?? undefined);
      if (resp.ok) {
        setCooldown(30); // 30 seconds cooldown
      } else {
        setError("Could not resend OTP. Try again later.");
      }
    } catch {
      setError("Network error. Try again.");
    }
  }

  function maskId(id?: string | null) {
    if (!id) return "your contact";
    const digits = id.replace(/\D/g, "");
    if (digits.length >= 6) {
      return `${digits.slice(0, 3)}****${digits.slice(-2)}`;
    }
    const at = id.indexOf("@");
    if (at > 1) {
      return id[0] + "*****" + id.slice(at - 1);
    }
    return id;
  }

  return (
    <div className="h-screen w-full flex items-center justify-center bg-[#f5f6fa] px-4 py-6 overflow-hidden">
      <div className="bg-[#1c1b29] text-white rounded-2xl shadow-xl w-full max-w-3xl h-[92vh] flex overflow-hidden">
        <div className="hidden md:flex w-1/3 relative">
          <img
            src="/reset-page-img.png"
            alt="OTP visual"
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/10" />
        </div>

        <div className="w-full md:w-2/3 flex flex-col items-center justify-center p-6">
          <img src="/logo.png" className="w-24 mb-5" />

          <div className="w-full max-w-xs">
            <h1 className="text-2xl font-semibold text-center mb-2">Verify OTP</h1>

            <p className="text-gray-300 text-xs text-center mb-4">
              Enter the OTP sent to <strong>{maskId(identifier)}</strong>
            </p>

            <form onSubmit={handleSubmit} className="space-y-3">
              <input
                type="text"
                maxLength={6}
                placeholder="Enter OTP"
                value={otp}
                onChange={(e) => setOtp(e.target.value)}
                className="w-full bg-gray-100 text-black p-3 rounded-md text-center text-lg tracking-widest outline-none"
                inputMode="numeric"
              />

              {error && <div className="text-xs text-yellow-300">{error}</div>}

              <button
                type="submit"
                disabled={verifying}
                className={`w-full ${
                  verifying ? "bg-purple-500/80" : "bg-purple-600 hover:bg-purple-700"
                } p-3 rounded-md text-white text-sm font-medium`}
              >
                {verifying ? "Verifying..." : "Verify OTP"}
              </button>
            </form>

            <div className="text-center mt-3">
              <button
                onClick={handleResend}
                disabled={cooldown > 0}
                className={`text-sm ${cooldown > 0 ? "text-gray-400" : "text-purple-400 hover:underline"}`}
              >
                {cooldown > 0 ? `Resend available in ${cooldown}s` : "Resend OTP"}
              </button>
            </div>

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
