"use client";

import { useAuth } from "../context/AuthContext";
import HeaderGuest from "./HeaderGuest";
import HeaderAuth from "./HeaderAuth";
import HeaderCart from "./HeaderCart";
import Footer from "./Footer";
import { usePathname } from "next/navigation";

export default function ClientWrapper({ children }) {
  const { user, loading } = useAuth();
  const pathname = usePathname();
  if (loading) return null;

  const hideLayout = ["/login", "/signup", "/forgot-password", "/verify-otp", "/reset-password"].includes(pathname) || pathname?.startsWith("/admin");
  const isCartPage = pathname === "/cart";

  return (
    <>
      {!hideLayout && (isCartPage ? <HeaderCart /> : user ? <HeaderAuth /> : <HeaderGuest/>)}
      {children}
      {!hideLayout && !isCartPage && <Footer />}
    </>
  );
}
