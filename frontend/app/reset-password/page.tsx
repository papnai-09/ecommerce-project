"use client";

import { useState } from "react";
import Link from "next/link";

export default function ResetPasswordPage() {
  const [password, setPassword] = useState("");
  const [confirm, setConfirm] = useState("");
  const [error, setError] = useState<string | null>(null);

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

    // TODO: API call to save new password
    console.log("Password reset:", password);
  }

  return (
    <div className="h-screen w-full flex items-center justify-center bg-[#f5f6fa] px-4 py-6 overflow-hidden">

      {/* MAIN CARD */}
      <div className="bg-[#1c1b29] text-white rounded-2xl shadow-xl w-full max-w-3xl h-[92vh] flex overflow-hidden">

        {/* LEFT IMAGE PANEL */}
        <div className="hidden md:flex w-1/3 relative">
          <img
            src="/reset-page-img.png"
            alt="Reset visual"
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/10" />
        </div>

        {/* RIGHT FORM PANEL */}
        <div className="w-full md:w-2/3 flex flex-col items-center justify-center p-6">

          {/* LOGO */}
          <img src="/logo.png" className="w-24 mb-5" />

          {/* CONTENT */}
          <div className="w-full max-w-xs">

            <h1 className="text-2xl font-semibold text-center mb-2">Reset Password</h1>

            <p className="text-gray-300 text-xs text-center mb-4">
              Create a new password for your account.
            </p>

            <form onSubmit={handleSubmit} className="space-y-3">

              <input
                type="password"
                placeholder="New Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full bg-gray-100 text-black p-2.5 rounded-md text-sm outline-none"
              />

              <input
                type="password"
                placeholder="Confirm New Password"
                value={confirm}
                onChange={(e) => setConfirm(e.target.value)}
                className="w-full bg-gray-100 text-black p-2.5 rounded-md text-sm outline-none"
              />

              {error && <div className="text-xs text-yellow-300">{error}</div>}

              <button
                type="submit"
                className="w-full bg-purple-600 hover:bg-purple-700 p-2.5 rounded-md text-white text-sm font-medium"
              >
                Save New Password
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
