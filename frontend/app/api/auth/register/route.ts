export async function POST(req: Request) {
  try {
    const body = await req.json();
    const backend = process.env.BACKEND_URL || "https://e-commerce-backend-2mm7.onrender.com";
    const res = await fetch(`${backend}/auth/register`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(body),
    });
    const data = await res.json();
    return new Response(JSON.stringify(data), { status: res.status, headers: { "Content-Type": "application/json" } });
  } catch (err) {
    console.error(err);
    return new Response(JSON.stringify({ error: "Failed to register" }), { status: 500, headers: { "Content-Type": "application/json" } });
  }
}
