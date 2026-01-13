"use client";

import { createContext, useContext, useState, useEffect } from "react";

const AuthContext = createContext(null);

function decodeJwt(token) {
  try {
    const payload = token.split('.')[1];
    const decoded = JSON.parse(atob(payload));
    return decoded;
  } catch (e) {
    return null;
  }
}

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [token, setToken] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const t = localStorage.getItem('token');
    if (t) {
      const payload = decodeJwt(t);
      if (payload) {
        setUser({ email: payload.sub, role: payload.role });
        setToken(t);
      }
    }
    setLoading(false);
  }, []);

  const login = (t) => {
    const payload = decodeJwt(t);
    if (payload) {
      setUser({ email: payload.sub, role: payload.role });
      setToken(t);
      localStorage.setItem('token', t);
    }
  };

  const logout = () => {
    setUser(null);
    setToken(null);
    localStorage.removeItem('token');
  };

  return (
    <AuthContext.Provider value={{ user, token, loading, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

export const useAuth = () => useContext(AuthContext);
