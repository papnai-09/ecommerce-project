export default function AdminDashboardPage() {
  return (
    <div>
      <h1 className="text-2xl font-semibold">Dashboard</h1>

      <div className="mt-6 grid grid-cols-1 sm:grid-cols-3 gap-4">
        <div className="p-4 bg-card rounded-md shadow hover:shadow-md transition-shadow">
          <div className="text-sm text-muted">Total Users</div>
          <div className="text-2xl font-bold">123</div>
        </div>

        <div className="p-4 bg-card rounded-md shadow hover:shadow-md transition-shadow">
          <div className="text-sm text-muted">Total Orders</div>
          <div className="text-2xl font-bold">56</div>
        </div>

        <div className="p-4 bg-card rounded-md shadow hover:shadow-md transition-shadow">
          <div className="text-sm text-muted">Revenue (30d)</div>
          <div className="text-2xl font-bold">$4,321</div>
        </div>
      </div>

      <div className="mt-8 grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="col-span-2 bg-card p-4 rounded-md">
          <h2 className="text-lg font-semibold mb-3">Sales (last 7 days)</h2>
          <div className="h-40 bg-gradient-to-r from-primary/20 to-accent/20 rounded" />
        </div>

        <div className="bg-card p-4 rounded-md">
          <h2 className="text-lg font-semibold mb-3">Recent Orders</h2>
          <ul className="space-y-2 text-sm text-muted">
            <li>#1001 — alice@example — $29.98</li>
            <li>#1002 — bob@example — $12.99</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
