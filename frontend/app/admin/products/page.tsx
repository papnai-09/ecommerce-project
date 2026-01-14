"use client";
import { useState, type FormEvent } from "react";

function ProductRow({ p }: { p: { id: number; name: string; price: number; category: string; status: string } }) {
  return (
    <tr className="border-b">
      <td className="px-4 py-2">{p.id}</td>
      <td className="px-4 py-2">{p.name}</td>
      <td className="px-4 py-2">${p.price}</td>
      <td className="px-4 py-2">{p.category}</td>
      <td className="px-4 py-2">{p.status}</td>
      <td className="px-4 py-2">
        <button className="px-2 py-1 mr-2 bg-primary text-primary-foreground rounded">Edit</button>
        <button className="px-2 py-1 bg-destructive text-white rounded">Delete</button>
      </td>
    </tr>
  );
}

export default function ProductsPage() {
  const [q, setQ] = useState("");
  const [showCreate, setShowCreate] = useState(false);
  const [products, setProducts] = useState([
    { id: 1, name: "Sample Book", price: 9.99, category: "Books", status: "active" },
    { id: 2, name: "Sample Mug", price: 12.99, category: "Merch", status: "active" },
  ]);

  function handleCreate(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const f = new FormData(e.currentTarget as HTMLFormElement);
    const newP = {
      id: products.length + 1,
      name: String(f.get("name") ?? ""),
      price: parseFloat(String(f.get("price") ?? "0")) || 0,
      category: String(f.get("category") ?? ""),
      status: "active",
    } as { id: number; name: string; price: number; category: string; status: string };
    setProducts([newP, ...products]);
    setShowCreate(false);
  }

  const filtered = products.filter((p) => p.name.toLowerCase().includes(q.toLowerCase()));

  return (
    <div>
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-2xl font-semibold">Products</h1>
        <div className="flex items-center gap-3">
          <input value={q} onChange={(e) => setQ(e.target.value)} placeholder="Search products" className="px-3 py-2 rounded border bg-popover text-popover-foreground" />
          <button onClick={() => setShowCreate(true)} className="px-3 py-2 bg-primary text-primary-foreground rounded shadow">Create Product</button>
        </div>
      </div>

      <div className="bg-card p-4 rounded shadow">
        <table className="w-full table-auto divide-y">
          <thead>
            <tr className="text-left text-sm text-muted">
              <th className="px-4 py-3">ID</th>
              <th className="px-4 py-3">Name</th>
              <th className="px-4 py-3">Price</th>
              <th className="px-4 py-3">Category</th>
              <th className="px-4 py-3">Status</th>
              <th className="px-4 py-3">Actions</th>
            </tr>
          </thead>
          <tbody className="text-sm">
            {filtered.map((p) => (
              <ProductRow key={p.id} p={p} />
            ))}
          </tbody>
        </table>
      </div>

      {showCreate && (
        <div className="fixed inset-0 flex items-center justify-center bg-black/40">
          <form onSubmit={handleCreate} className="bg-card p-6 rounded w-full max-w-md shadow">
            <h2 className="text-lg font-semibold mb-4">Create Product</h2>
            <div className="mb-3">
              <label className="block text-sm mb-1">Name</label>
              <input name="name" required className="w-full px-3 py-2 rounded border bg-popover text-popover-foreground" />
            </div>
            <div className="mb-3 grid grid-cols-2 gap-3">
              <div>
                <label className="block text-sm mb-1">Price</label>
                <input name="price" type="number" step="0.01" required className="w-full px-3 py-2 rounded border bg-popover text-popover-foreground" />
              </div>
              <div>
                <label className="block text-sm mb-1">Category</label>
                <input name="category" className="w-full px-3 py-2 rounded border bg-popover text-popover-foreground" />
              </div>
            </div>

            <div className="flex gap-2 justify-end">
              <button type="button" onClick={() => setShowCreate(false)} className="px-3 py-1 rounded border">Cancel</button>
              <button type="submit" className="px-3 py-1 bg-primary text-primary-foreground rounded">Create</button>
            </div>
          </form>
        </div>
      )}
    </div>
  );
}
