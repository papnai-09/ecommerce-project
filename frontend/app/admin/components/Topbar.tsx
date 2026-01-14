"use client";

import { usePathname, useRouter } from "next/navigation";
import { useState, useEffect } from "react";
import { useAuth } from "../../context/AuthContext";

export default function Topbar() {
  const pathname = usePathname();
  const router = useRouter();
  const [q, setQ] = useState("");
  const { user, logout, loading } = useAuth();

  useEffect(() => {
    if (!loading && (!user || user.role !== 'admin')) {
      router.replace('/login');
    }
  }, [user, loading, router]);

  const title = pathname?.split("/").filter(Boolean).slice(1).join(" / ") || "Dashboard";

  return (
    <header className="flex items-center justify-between p-4 border-b border-sidebar-border bg-card">
      <div className="flex items-center gap-4">
        <div className="text-lg font-semibold">{title}</div>
        <div className="hidden sm:block">
          <input
            value={q}
            onChange={(e) => setQ(e.target.value)}
            placeholder="Search..."
            className="px-3 py-1 rounded bg-popover text-popover-foreground border border-input"
          />
        </div>
      </div>

      <div className="flex items-center gap-3">
        <button className="px-3 py-1 bg-primary text-primary-foreground rounded">New</button>
        <div className="text-sm text-muted">{user?.email ?? 'Admin'}</div>
        <button onClick={() => { logout(); router.replace('/login'); }} className="px-3 py-1 bg-destructive text-white rounded">Logout</button>
      </div>
    </header>
  );
}
