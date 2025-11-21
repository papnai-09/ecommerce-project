"use client";

import Link from "next/link";
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaYoutube } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";  // X (Twitter) icon
import { LuCircle } from "react-icons/lu";      // Custom last icon (replace as needed)

export default function Footer() {
  return (
    <footer className="w-full bg-[#0f1111] text-[#cccccc] pt-16 pb-10 mt-20">
      
      {/* TOP LINK SECTIONS */}
      <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-10 px-6">

        <div>
          <h3 className="text-white font-semibold text-lg mb-3">
            Get to Know Us
          </h3>
          <ul className="space-y-2 text-sm">
            <li><Link href="/about">About Us</Link></li>
            <li><Link href="/careers">Careers</Link></li>
            <li><Link href="/blog">Blog</Link></li>
            <li><Link href="/press">Press Releases</Link></li>
          </ul>
        </div>

        <div>
          <h3 className="text-white font-semibold text-lg mb-3">
            Connect With Us
          </h3>
          <ul className="space-y-2 text-sm">
            <li><Link href="https://facebook.com">Facebook</Link></li>
            <li><Link href="https://instagram.com">Instagram</Link></li>
            <li><Link href="https://linkedin.com">LinkedIn</Link></li>
          </ul>
        </div>

        <div>
          <h3 className="text-white font-semibold text-lg mb-3">
            Make Money With Us
          </h3>
          <ul className="space-y-2 text-sm">
            <li><Link href="/sell">Sell on OneVriksh</Link></li>
            <li><Link href="/affiliate">Affiliate Program</Link></li>
            <li><Link href="/ads">Advertise</Link></li>
          </ul>
        </div>

        <div>
          <h3 className="text-white font-semibold text-lg mb-3">
            Let Us Help You
          </h3>
          <ul className="space-y-2 text-sm">
            <li><Link href="/support">Help Center</Link></li>
            <li><Link href="/orders">Your Orders</Link></li>
            <li><Link href="/returns">Returns</Link></li>
            <li><Link href="/faq">FAQ</Link></li>
          </ul>
        </div>

      </div>

      {/* SOCIAL ICONS */}
      <div className="flex justify-center gap-6 mt-12">

        <SocialIcon href="https://facebook.com">
          <FaFacebookF size={20} />
        </SocialIcon>

        <SocialIcon href="https://twitter.com">
          <FaXTwitter size={20} />
        </SocialIcon>

        <SocialIcon href="https://linkedin.com">
          <FaLinkedinIn size={20} />
        </SocialIcon>

        <SocialIcon href="https://instagram.com">
          <FaInstagram size={20} />
        </SocialIcon>

        <SocialIcon href="https://youtube.com">
          <FaYoutube size={22} />
        </SocialIcon>

        <SocialIcon href="#">
          <LuCircle size={22} />
        </SocialIcon>

      </div>

      {/* COPYRIGHT */}
      <div className="text-center text-gray-400 text-sm mt-10 border-t border-gray-700 pt-6">
        © {new Date().getFullYear()} OneVriksh — All Rights Reserved.
      </div>

    </footer>
  );
}

/* SOCIAL ICON CIRCLE WRAPPER */
function SocialIcon({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <Link
      href={href}
      className="
        w-12 h-12 
        flex items-center justify-center
        rounded-full
        border border-white/20
        text-white
        hover:border-[#38bdf8]
        hover:text-[#38bdf8]
        transition
      "
    >
      {children}
    </Link>
  );
}
