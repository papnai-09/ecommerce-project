"use client";

import { useState } from "react";
import Link from "next/link";
import { Lock, ArrowRight, CheckCircle } from "lucide-react";

export default function ResetPasswordPage() {
  const [password, setPassword] = useState("");
  const [confirm, setConfirm] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState(false);

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setError(null);

    if (password.length < 6) {
      setError("Password must be at least 6 characters.");
      return;
    }

    if (password !== confirm) {
      setError("Passwords do not match.");
      return;
    }

    // 🔐 Simulated API call
    setTimeout(() => {
      setSuccess(true);
    }, 800);
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
        <div className="flex justify-center mb-6">
          <img src="/logo.png" alt="OneVriksh" className="w-28" />
        </div>

        {!success ? (
          <>
            {/* TITLE */}
            <h1 className="text-xl font-semibold text-gray-900 text-center">
              Reset Password
            </h1>

            <p className="text-sm text-gray-500 text-center mt-2">
              Create a new password for your account.
            </p>

            {/* FORM */}
            <form onSubmit={handleSubmit} className="mt-6 space-y-4">

              {/* NEW PASSWORD */}
              <div className="relative">
                <Lock
                  size={18}
                  className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
                />
                <input
                  type="password"
                  placeholder="New password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
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
                  required
                />
              </div>

              {/* CONFIRM PASSWORD */}
              <div className="relative">
                <Lock
                  size={18}
                  className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
                />
                <input
                  type="password"
                  placeholder="Confirm new password"
                  value={confirm}
                  onChange={(e) => setConfirm(e.target.value)}
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
                  required
                />
              </div>

              {error && (
                <p className="text-xs text-red-600">{error}</p>
              )}

              {/* SAVE BUTTON */}
              <button
                type="submit"
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
                Save New Password
                <ArrowRight size={16} />
              </button>
            </form>

            {/* BACK */}
            <div className="mt-5 text-center">
              <Link
                href="/login"
                className="text-sm text-sky-700 hover:underline"
              >
                Back to Login
              </Link>
            </div>
          </>
        ) : (
          /* SUCCESS STATE */
          <div className="text-center py-6">
            <div className="flex justify-center mb-4">
              <div className="w-14 h-14 flex items-center justify-center rounded-full bg-green-100">
                <CheckCircle size={28} className="text-green-600" />
              </div>
            </div>

            <h2 className="text-lg font-semibold text-gray-900">
              Password Updated
            </h2>

            <p className="text-sm text-gray-500 mt-2">
              Your password has been successfully reset.
            </p>

            <Link
              href="/login"
              className="
                mt-6 inline-flex items-center justify-center gap-2
                w-full py-2.5
                rounded-lg
                bg-sky-600
                text-white
                text-sm font-medium
                hover:bg-sky-700
                transition
              "
            >
              Go to Login
              <ArrowRight size={16} />
            </Link>
          </div>
        )}
      </div>
    </div>
  );
}
