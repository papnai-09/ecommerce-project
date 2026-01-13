"use client";
import { useState } from "react";

export default function UsersPage() {
  const [users, setUsers] = useState([
    { id: 1, email: "alice@example.com", role: "user" },
    { id: 2, email: "bob@example.com", role: "admin" },
  ]);

  function toggleAdmin(id) {
    setUsers((s) => s.map((u) => (u.id === id ? { ...u, role: u.role === "admin" ? "user" : "admin" } : u)));
  }

  return (
    <div>
      <div className="flex items-center justify-between mb-4">
        <h1 className="text-2xl font-semibold">Users</h1>
      </div>

      <div className="bg-card p-4 rounded">
        <table className="w-full table-auto">
          <thead>
            <tr className="text-left">
              <th className="px-4 py-2">ID</th>
              <th className="px-4 py-2">Email</th>
              <th className="px-4 py-2">Role</th>
              <th className="px-4 py-2">Actions</th>
            </tr>
          </thead>
          <tbody>
            {users.map((u) => (
              <tr key={u.id} className="border-b">
                <td className="px-4 py-2">{u.id}</td>
                <td className="px-4 py-2">{u.email}</td>
                <td className="px-4 py-2">{u.role}</td>
                <td className="px-4 py-2">
                  <button onClick={() => toggleAdmin(u.id)} className="px-2 py-1 bg-primary text-primary-foreground rounded">
                    {u.role === "admin" ? "Revoke Admin" : "Make Admin"}
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
