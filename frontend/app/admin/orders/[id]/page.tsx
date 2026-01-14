"use client";
import { useState } from "react";

export default function OrderDetail({ params }: { params: { id: string } }) {
  const [order, setOrder] = useState({ id: params.id, user: "alice@example.com", total: 29.98, items: [{ name: "Sample Book", qty: 1 }], status: "processing" });

  function updateStatus(next: string) {
    setOrder({ ...order, status: next });
    alert("Status updated (placeholder): " + next);
  }

  return (
    <div>
      <h1 className="text-2xl font-semibold mb-4">Order #{order.id}</h1>
      <div className="bg-card p-4 rounded shadow space-y-4">
        <div>
          <strong>User:</strong> {order.user}
        </div>
        <div>
          <strong>Total:</strong> ${order.total}
        </div>
        <div>
          <strong>Items:</strong>
          <ul className="ml-4 list-disc">
            {order.items.map((it, i) => (
              <li key={i}>{it.name} x {it.qty}</li>
            ))}
          </ul>
        </div>

        <div className="flex gap-2">
          <button onClick={() => updateStatus("shipped")} className="px-3 py-1 bg-primary text-primary-foreground rounded">Mark shipped</button>
          <button onClick={() => updateStatus("delivered")} className="px-3 py-1 bg-primary text-primary-foreground rounded">Mark delivered</button>
        </div>
      </div>
    </div>
  );
}
