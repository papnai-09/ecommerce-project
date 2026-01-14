"use client";
import { useState } from "react";

export default function OrdersPage() {
  const [orders, setOrders] = useState([
    { id: 1001, user: "alice@example.com", total: 29.98, status: "processing" },
    { id: 1002, user: "bob@example.com", total: 12.99, status: "shipped" },
  ]);

  function updateStatus(id: number, next: string) {
    setOrders((s) => s.map((o) => (o.id === id ? { ...o, status: next } : o)));
  }

  return (
    <div>
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-2xl font-semibold">Orders</h1>
      </div>

      <div className="bg-card p-4 rounded shadow">
        <table className="w-full table-auto divide-y text-sm">
          <thead>
            <tr className="text-left text-muted">
              <th className="px-4 py-3">Order ID</th>
              <th className="px-4 py-3">User</th>
              <th className="px-4 py-3">Total</th>
              <th className="px-4 py-3">Status</th>
              <th className="px-4 py-3">Actions</th>
            </tr>
          </thead>
          <tbody>
            {orders.map((o) => (
              <tr key={o.id} className="hover:bg-popover/40 transition-colors">
                <td className="px-4 py-3">{o.id}</td>
                <td className="px-4 py-3">{o.user}</td>
                <td className="px-4 py-3">${o.total}</td>
                <td className="px-4 py-3 capitalize">{o.status}</td>
                <td className="px-4 py-3">
                  <button onClick={() => updateStatus(o.id, "shipped")} className="px-2 py-1 mr-2 bg-primary text-primary-foreground rounded">Mark shipped</button>
                  <button onClick={() => updateStatus(o.id, "delivered")} className="px-2 py-1 bg-primary text-primary-foreground rounded">Mark delivered</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
