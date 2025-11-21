import { PrismaClient } from "@prisma/client";
import bcrypt from "bcryptjs";

const prisma = new PrismaClient();

export async function POST(req) {
  const { email, password } = await req.json();

  const user = await prisma.user.findUnique({ where: { email } });

  if (!user) return Response.json({ error: "User not found" }, { status: 404 });

  const match = await bcrypt.compare(password, user.password);

  if (!match)
    return Response.json({ error: "Incorrect password" }, { status: 400 });

  return Response.json({ message: "Login successful", user });
}
