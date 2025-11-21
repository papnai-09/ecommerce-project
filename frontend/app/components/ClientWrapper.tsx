"use client";

import { useAuth } from "../context/AuthContext";
import HeaderBeforeLogin from "./HeaderBeforeLogin";
import HeaderAfterLogin from "./HeaderAfterLogin";

export default function ClientWrapper({ children }) {
  const { user, loading } = useAuth();

  // Prevent header flicker on refresh
  if (loading) return null;

  return (
    <>
      {user ? <HeaderAfterLogin /> : <HeaderBeforeLogin />}
      {children}
    </>
  );
}
