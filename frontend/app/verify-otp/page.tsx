"use client";

import { useEffect, useRef, useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import Link from "next/link";
import { ShieldCheck, ArrowRight } from "lucide-react";

export default function VerifyOtpPage() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const phone = searchParams.get("phone") || "";

  const [otp, setOtp] = useState<string[]>(Array(6).fill(""));
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const [timer, setTimer] = useState(30);

  const inputsRef = useRef<(HTMLInputElement | null)[]>([]);

  /* ===== TIMER ===== */
  useEffect(() => {
    if (timer === 0) return;
    const interval = setInterval(() => {
      setTimer((t) => t - 1);
    }, 1000);
    return () => clearInterval(interval);
  }, [timer]);

  /* ===== HANDLE OTP INPUT ===== */
  function handleChange(value: string, index: number) {
    if (!/^\d?$/.test(value)) return;

    const newOtp = [...otp];
    newOtp[index] = value;
    setOtp(newOtp);

    if (value && index < 5) {
      inputsRef.current[index + 1]?.focus();
    }
  }

  function handleKeyDown(e: React.KeyboardEvent, index: number) {
    if (e.key === "Backspace" && !otp[index] && index > 0) {
      inputsRef.current[index - 1]?.focus();
    }
  }

  /* ===== VERIFY OTP ===== */
  async function handleVerify(e: React.FormEvent) {
    e.preventDefault();
    setError(null);

    const code = otp.join("");
    if (code.length !== 6) {
      setError("Please enter the 6-digit OTP.");
      return;
    }

    setLoading(true);

    // 🔐 Simulated verification
    setTimeout(() => {
      setLoading(false);
      router.push("/"); // redirect after success
    }, 1000);
  }

  /* ===== RESEND OTP ===== */
  function resendOtp() {
    setTimer(30);
    setOtp(Array(6).fill(""));
    inputsRef.current[0]?.focus();
  }

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
            <ShieldCheck size={26} className="text-sky-600" />
          </div>
        </div>

        {/* TITLE */}
        <h1 className="text-xl font-semibold text-gray-900">
          Verify OTP
        </h1>

        <p className="text-sm text-gray-500 mt-2">
          Enter the 6-digit code sent to
          <span className="font-medium text-gray-700">
            {" "}+91 {phone}
          </span>
        </p>

        {/* OTP FORM */}
        <form onSubmit={handleVerify} className="mt-6">
          <div className="flex justify-center gap-2 mb-4">
            {otp.map((digit, index) => (
              <input
                key={index}
                ref={(el) => { inputsRef.current[index] = el }}
                type="text"
                maxLength={1}
                value={digit}
                onChange={(e) => handleChange(e.target.value, index)}
                onKeyDown={(e) => handleKeyDown(e, index)}
                className="
                  w-10 h-11
                  text-center text-lg font-semibold
                  border border-gray-300 rounded-lg
                  outline-none
                  focus:border-sky-500
                  focus:ring-2 focus:ring-sky-200
                  transition
                "
              />
            ))}
          </div>

          {error && (
            <p className="text-xs text-red-600 mb-3">{error}</p>
          )}

          {/* VERIFY BUTTON */}
          <button
            type="submit"
            disabled={loading}
            className="
              w-full
              py-2.5
              rounded-lg
              bg-sky-600
              text-white
              text-sm font-medium
              flex items-center justify-center gap-2
              hover:bg-sky-700
              transition
              disabled:opacity-70
            "
          >
            {loading ? "Verifying..." : "Verify OTP"}
            {!loading && <ArrowRight size={16} />}
          </button>
        </form>

        {/* RESEND */}
        <div className="mt-5 text-sm text-gray-500">
          {timer > 0 ? (
            <>Resend OTP in <span className="font-medium">{timer}s</span></>
          ) : (
            <button
              onClick={resendOtp}
              className="text-sky-700 hover:underline"
            >
              Resend OTP
            </button>
          )}
        </div>

        {/* BACK */}
        <div className="mt-4">
          <Link
            href="/signup"
            className="text-sm text-gray-500 hover:text-sky-600 transition"
          >
            Change phone number
          </Link>
        </div>
      </div>
    </div>
  );
}
