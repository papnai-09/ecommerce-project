import AuthCard from "@/components/AuthCard";
import Link from "next/link";

export default function Signup() {
  return (
    <AuthCard>
      <h3 className="text-3xl font-semibold text-center mb-8 text-blue-500">CREATE ACCOUNT</h3>

      <form className="space-y-4">
        <input type="text" name="name" placeholder="Full Name" className="w-full bg-transparent border-b border-gray-400 focus:border-blue-400 focus:outline-none text-black py-2 placeholder-gray-300" />
        <input type="email" name="email" placeholder="Email" className="w-full bg-transparent border-b border-gray-400 focus:border-blue-400 focus:outline-none text-black py-2 placeholder-gray-300" />
        <input type="text" name="Mobile_no" placeholder="Mobile Number" className="w-full bg-transparent border-b border-gray-400 focus:border-blue-400 focus:outline-none text-black py-2 placeholder-gray-300" />
        <input type="password" name="password" placeholder="Password" className="w-full bg-transparent border-b border-gray-400 focus:border-blue-400 focus:outline-none text-black py-2 placeholder-gray-300" />
        <input type="password" name="cpassword" placeholder="Confirm Password" className="w-full bg-transparent border-b border-gray-400 focus:border-blue-400 focus:outline-none text-black py-2 placeholder-gray-300" />
        <div className="flex items-center justify-center">
          <button className="w-[30%] bg-blue-500 text-white p-2 text-md  rounded-4xl hover:scale-105 transition-transform duration-300">
            Sign Up
          </button>
        </div>
      </form>
    </AuthCard>
  );
}
