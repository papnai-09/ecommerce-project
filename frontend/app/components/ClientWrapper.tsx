"use client";

import { useAuth } from "../context/AuthContext";
import HeaderAuth from "./HeaderAuth";
import HeaderGuest from "./HeaderGuest";
import HeaderCart from "./HeaderCart";
import Footer from "./Footer";
import { usePathname } from "next/navigation";

export default function ClientWrapper({ children }) {
  const { user, loading } = useAuth();
  const pathname = usePathname();

  if (loading) return null;

  const hideLayout =
    pathname === "/login" ||
    pathname === "/signup" ||
    pathname === "/forgot-password" ||
    pathname === "/verify-otp" ||
    pathname === "/reset-password";

  const isCartPage = pathname === "/cart";

  return (
    <>
      {!hideLayout && (
        isCartPage ? (
          <HeaderCart />
        ) : (
          user ? <HeaderAuth /> : <HeaderGuest />
        )
      )}

      {children}

      {!hideLayout && <Footer />}
    </>
  );
}
