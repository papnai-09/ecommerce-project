"use client";

import Link from "next/link";
import {
  Facebook,
  Instagram,
  Twitter,
  Linkedin,
  Youtube,
} from "lucide-react";

export default function Footer() {
  return (
    <footer className="mt-20 bg-[#0f172a] text-gray-300">
      {/* ===== Top Section ===== */}
      <div className="w-[93%] mx-auto py-14 grid grid-cols-1 md:grid-cols-4 gap-10">

        {/* ===== Brand Info ===== */}
        <div>
          <h3 className="text-xl font-semibold text-white mb-3">
            OneVriksh Pvt. Ltd.
          </h3>
          <p className="text-sm text-gray-400 leading-relaxed">
            OneVriksh Pvt. Ltd. is a modern e-commerce platform offering
            electronics, books, and essentials with a focus on quality,
            affordability, and customer satisfaction.
          </p>

          {/* Social Icons */}
          <div className="flex items-center gap-4 mt-5">
            <a href="#" className="hover:text-white transition">
              <Facebook size={20} />
            </a>
            <a href="#" className="hover:text-white transition">
              <Instagram size={20} />
            </a>
            <a href="#" className="hover:text-white transition">
              <Twitter size={20} />
            </a>
            <a href="#" className="hover:text-white transition">
              <Linkedin size={20} />
            </a>
            <a href="#" className="hover:text-white transition">
              <Youtube size={20} />
            </a>
          </div>
        </div>

        {/* ===== Company ===== */}
        <div>
          <h4 className="text-sm font-semibold text-white mb-4 uppercase tracking-wide">
            Company
          </h4>
          <ul className="space-y-2 text-sm">
            <li><Link href="#" className="hover:text-white">About Us</Link></li>
            <li><Link href="#" className="hover:text-white">Careers</Link></li>
            <li><Link href="#" className="hover:text-white">Blog</Link></li>
            <li><Link href="#" className="hover:text-white">Press</Link></li>
          </ul>
        </div>

        {/* ===== Support ===== */}
        <div>
          <h4 className="text-sm font-semibold text-white mb-4 uppercase tracking-wide">
            Support
          </h4>
          <ul className="space-y-2 text-sm">
            <li><Link href="#" className="hover:text-white">Help Center</Link></li>
            <li><Link href="#" className="hover:text-white">Contact Us</Link></li>
            <li><Link href="#" className="hover:text-white">Shipping</Link></li>
            <li><Link href="#" className="hover:text-white">Returns</Link></li>
          </ul>
        </div>

        {/* ===== Legal ===== */}
        <div>
          <h4 className="text-sm font-semibold text-white mb-4 uppercase tracking-wide">
            Legal
          </h4>
          <ul className="space-y-2 text-sm">
            <li><Link href="#" className="hover:text-white">Privacy Policy</Link></li>
            <li><Link href="#" className="hover:text-white">Terms of Service</Link></li>
            <li><Link href="#" className="hover:text-white">Refund Policy</Link></li>
            <li><Link href="#" className="hover:text-white">Security</Link></li>
          </ul>
        </div>

      </div>

      {/* ===== Bottom Bar ===== */}
      <div className="border-t border-white/10">
        <div className="w-[93%] mx-auto py-4 text-sm flex flex-col md:flex-row items-center justify-between text-gray-400">
          <p>
            © {new Date().getFullYear()} OneVriksh Pvt. Ltd. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
