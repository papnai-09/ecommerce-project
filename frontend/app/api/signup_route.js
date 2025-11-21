import { PrismaClient } from "@prisma/client";
import bcrypt from "bcryptjs";

const prisma = new PrismaClient();

export async function POST(req) {
  try {
    const { name, email, mobile, password } = await req.json();

    const hashedPassword = await bcrypt.hash(password, 10);

    const user = await prisma.user.create({
      data: { name, email, mobile, password: hashedPassword },
    });

    return Response.json({ message: "User created", user });
  } catch (err) {
    return Response.json({ error: "Failed to register" }, { status: 500 });
  }
}
