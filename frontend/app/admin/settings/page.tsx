"use client";
import { useState, FormEvent } from "react";

export default function SettingsPage() {
  const [storeName, setStoreName] = useState("My Store");
  const [currency, setCurrency] = useState("USD");

  function save(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    // placeholder: save to backend later
    alert("Settings saved (placeholder)");
  }

  return (
    <div>
      <h1 className="text-2xl font-semibold mb-4">Settings</h1>

      <form onSubmit={save} className="bg-card p-4 rounded max-w-lg space-y-4">
        <div>
          <label className="block text-sm mb-1">Store Name</label>
          <input value={storeName} onChange={(e) => setStoreName(e.target.value)} className="w-full px-3 py-2 rounded border bg-popover text-popover-foreground" />
        </div>

        <div>
          <label className="block text-sm mb-1">Currency</label>
          <input value={currency} onChange={(e) => setCurrency(e.target.value)} className="w-full px-3 py-2 rounded border bg-popover text-popover-foreground" />
        </div>

        <div className="flex justify-end">
          <button className="px-3 py-1 bg-primary text-primary-foreground rounded">Save</button>
        </div>
      </form>
    </div>
  );
}
