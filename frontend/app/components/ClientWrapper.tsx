"use client";

import { ReactNode } from "react";
import { useAuth } from "../context/AuthContext";
import HeaderBeforeLogin from "./HeaderBeforeLogin";
import HeaderAfterLogin from "./HeaderAfterLogin";
import Footer from "./Footer";

interface WrapperProps {
  children: ReactNode;
}

export default function ClientWrapper({ children }: WrapperProps) {
  const { user, loading } = useAuth();

  if (loading) return null;

  return (
    <>
      {user ? <HeaderAfterLogin /> : <HeaderBeforeLogin />}

      {children}

      <Footer />
    </>
  );
}
