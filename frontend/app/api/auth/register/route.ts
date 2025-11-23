import { PrismaClient } from "@prisma/client";
import bcrypt from "bcryptjs";

const prisma = new PrismaClient();

export async function POST(req: Request) {
  try {
    const { name, email, mobile, password } = await req.json();

    // Check if user already exists
    const existing = await prisma.user.findUnique({ where: { email } });
    if (existing) {
      return Response.json(
        { error: "User already exists" },
        { status: 400 }
      );
    }

    // Hash Password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Create New User
    const user = await prisma.user.create({
      data: { name, email, mobile, password: hashedPassword },
    });

    return Response.json(
      { message: "User registered successfully", user },
      { status: 201 }
    );
  } catch (err) {
    console.error(err);
    return Response.json({ error: "Failed to register" }, { status: 500 });
  }
}
