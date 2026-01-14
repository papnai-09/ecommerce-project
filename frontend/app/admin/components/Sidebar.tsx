"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { Home, Box, ShoppingCart, Users, Tag, Settings, type LucideProps } from "lucide-react";
import type { ComponentType } from "react";
import styles from "../admin.module.css";

const ICONS: Record<string, ComponentType<LucideProps>> = {
  Dashboard: Home,
  Products: Box,
  Orders: ShoppingCart,
  Users: Users,
  Categories: Tag,
  Settings: Settings,
};

export default function Sidebar() {
  const pathname = usePathname();
  const [collapsed, setCollapsed] = useState(false);

  const items = [
    { href: "/admin", label: "Dashboard" },
    { href: "/admin/products", label: "Products" },
    { href: "/admin/orders", label: "Orders" },
    { href: "/admin/users", label: "Users" },
    { href: "/admin/categories", label: "Categories" },
    { href: "/admin/settings", label: "Settings" },
  ];

  return (
    <aside className={`min-h-screen p-4 transition-width duration-200 ${collapsed ? "w-20 sidebar-collapsed" : "w-64"} bg-sidebar text-sidebar-foreground`}>
      <div className="flex items-center justify-between mb-6">
        <Link href="/admin" className={`text-xl font-bold ${collapsed ? "text-sm" : ""}`}>Admin</Link>
        <button
          aria-label={collapsed ? "Expand sidebar" : "Collapse sidebar"}
          onClick={() => setCollapsed(!collapsed)}
          className="px-2 py-1 rounded bg-sidebar-border hover:bg-sidebar-ring text-sm"
        >
          {collapsed ? "»" : "«"}
        </button>
      </div>

      <nav className={`flex flex-col space-y-2 ${collapsed ? 'sidebar-collapsed' : ''}`}>
        {items.map((it) => {
          const active = pathname === it.href;
          const Icon = ICONS[it.label as keyof typeof ICONS] ?? Home;
          return (
            <Link
              key={it.href}
              href={it.href}
              title={it.label}
              aria-current={active ? "page" : undefined}
              className={`sidebar-link px-3 py-2 rounded transition-colors ${active ? "bg-sidebar-primary text-sidebar-primary-foreground" : "hover:bg-sidebar-primary/10"}`}
            >
              <div className="flex items-center gap-3">
                <Icon size={18} />
                <span className={`${collapsed ? "sr-only" : ""} text-sm`}>{it.label}</span>
              </div>
            </Link>
          );
        })}
      </nav>

      <div className="mt-auto pt-6">
        <div className="text-xs text-muted">Version 1.0</div>
      </div>
    </aside>
  );
}
