"use client";
import { useState, type FormEvent } from "react";

export default function NewProductPage() {
  const [name, setName] = useState("");
  const [price, setPrice] = useState(0);
  const [category, setCategory] = useState("");

  function save(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    // TODO: call backend
    alert("Product created (placeholder): " + name);
  }

  return (
    <div>
      <h1 className="text-2xl font-semibold mb-4">Create Product</h1>
      <form onSubmit={save} className="bg-card p-4 rounded max-w-lg space-y-4">
        <div>
          <label className="block text-sm mb-1">Name</label>
          <input value={name} onChange={(e) => setName(e.target.value)} className="w-full px-3 py-2 rounded border bg-popover text-popover-foreground" />
        </div>
        <div className="grid grid-cols-2 gap-3">
          <div>
            <label className="block text-sm mb-1">Price</label>
            <input value={price} onChange={(e) => setPrice(Number(e.target.value))} type="number" step="0.01" className="w-full px-3 py-2 rounded border bg-popover text-popover-foreground" />
          </div>
          <div>
            <label className="block text-sm mb-1">Category</label>
            <input value={category} onChange={(e) => setCategory(e.target.value)} className="w-full px-3 py-2 rounded border bg-popover text-popover-foreground" />
          </div>
        </div>
        <div className="flex justify-end">
          <button className="px-3 py-1 rounded border mr-2" type="button">Cancel</button>
          <button className="px-3 py-1 bg-primary text-primary-foreground rounded">Save</button>
        </div>
      </form>
    </div>
  );
}
