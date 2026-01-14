"use client";
import { useState, type FormEvent } from "react";

export default function CategoriesPage() {
  const [cats, setCats] = useState(["Books", "Merch"]);
  const [showAdd, setShowAdd] = useState(false);

  function addCat(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const f = new FormData(e.currentTarget as HTMLFormElement);
    const name = f.get("name");
    if (name) setCats((s) => [String(name), ...s]);
    setShowAdd(false);
  }

  return (
    <div>
      <div className="flex items-center justify-between mb-4">
        <h1 className="text-2xl font-semibold">Categories</h1>
        <button onClick={() => setShowAdd(true)} className="px-3 py-1 bg-primary text-primary-foreground rounded">Add Category</button>
      </div>

      <div className="bg-card p-4 rounded">
        <ul className="space-y-2">
          {cats.map((c, i) => (
            <li key={i} className="flex items-center justify-between border-b py-2">
              <span>{c}</span>
              <div className="space-x-2">
                <button className="px-2 py-1 bg-primary text-primary-foreground rounded">Edit</button>
                <button className="px-2 py-1 bg-destructive text-white rounded">Delete</button>
              </div>
            </li>
          ))}
        </ul>
      </div>

      {showAdd && (
        <div className="fixed inset-0 flex items-center justify-center bg-black/40">
          <form onSubmit={addCat} className="bg-card p-6 rounded w-full max-w-sm">
            <h2 className="text-lg font-semibold mb-4">Add Category</h2>
            <input name="name" required className="w-full px-3 py-2 rounded border bg-popover text-popover-foreground mb-3" />
            <div className="flex gap-2 justify-end">
              <button type="button" onClick={() => setShowAdd(false)} className="px-3 py-1 rounded border">Cancel</button>
              <button type="submit" className="px-3 py-1 bg-primary text-primary-foreground rounded">Add</button>
            </div>
          </form>
        </div>
      )}
    </div>
  );
}
