"use client";

import AuthCard from "../components/AuthCard";
import Link from "next/link";
import { useAuth } from "../context/AuthContext";

export default function Login() {
  const { login } = useAuth();

  const handleLogin = (e: any) => {
    e.preventDefault();
    login({ name: "User" }); // temporary login, replace with backend later
  };

  return (
    <AuthCard>
      <h2 className="text-3xl font-semibold text-center mb-8 text-blue-500">
        LOGIN
      </h2>

      <form className="space-y-4" onSubmit={handleLogin}>
        <input
          type="email"
          name="email"
          placeholder="Email"
          className="w-full bg-transparent border-b border-gray-400 focus:border-blue-400 focus:outline-none text-black py-2 placeholder-gray-300"
        />

        <input
          type="text"
          name="Mobile_no"
          placeholder="Mobile Number"
          className="w-full bg-transparent border-b border-gray-400 focus:border-blue-400 focus:outline-none text-black py-2 placeholder-gray-300"
        />

        <input
          type="password"
          name="password"
          placeholder="Password"
          className="w-full bg-transparent border-b border-gray-400 focus:border-blue-400 focus:outline-none text-black py-2 placeholder-gray-300"
        />

        <div className="flex items-center justify-between w-full">
          <Link href="/forgot-password" className="text-blue-500 text-sm mt-2">
            Forgot Password?
          </Link>

          <button
            type="submit"
            className="w-[30%] bg-blue-500 text-white p-2 rounded-3xl text-md hover:scale-105 transition-transform duration-300 "
          >
            Login
          </button>
        </div>
      </form>
    </AuthCard>
  );
}
