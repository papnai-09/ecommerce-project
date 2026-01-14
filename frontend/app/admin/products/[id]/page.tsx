"use client";
import { useState, type FormEvent } from "react";

export default function ProductDetail({ params }: { params: { id: string } }) {
  const [product, setProduct] = useState({ id: params.id, name: "Sample Book", price: 9.99, category: "Books", status: "active" });

  function save(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    alert("Saved (placeholder)");
  }

  return (
    <div>
      <h1 className="text-2xl font-semibold mb-4">Edit Product #{product.id}</h1>
      <form onSubmit={save} className="bg-card p-4 rounded max-w-lg space-y-4">
        <div>
          <label className="block text-sm mb-1">Name</label>
          <input defaultValue={product.name} className="w-full px-3 py-2 rounded border bg-popover text-popover-foreground" />
        </div>
        <div className="grid grid-cols-2 gap-3">
          <div>
            <label className="block text-sm mb-1">Price</label>
            <input defaultValue={product.price} type="number" step="0.01" className="w-full px-3 py-2 rounded border bg-popover text-popover-foreground" />
          </div>
          <div>
            <label className="block text-sm mb-1">Category</label>
            <input defaultValue={product.category} className="w-full px-3 py-2 rounded border bg-popover text-popover-foreground" />
          </div>
        </div>
        <div className="flex gap-2 justify-end">
          <button className="px-3 py-1 rounded border">Cancel</button>
          <button className="px-3 py-1 bg-primary text-primary-foreground rounded">Save</button>
        </div>
      </form>
    </div>
  );
}
