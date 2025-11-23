import { PrismaClient } from "@prisma/client";
import bcrypt from "bcryptjs";

const prisma = new PrismaClient();

export async function POST(req: Request) {
  try {
    const { email, password } = await req.json();

    // find user
    const user = await prisma.user.findUnique({ where: { email } });

    if (!user) {
      return Response.json({ error: "User not found" }, { status: 404 });
    }

    // verify password
    const match = await bcrypt.compare(password, user.password);
    if (!match) {
      return Response.json({ error: "Incorrect password" }, { status: 400 });
    }

    return Response.json(
      { message: "Login successful", user },
      { status: 200 }
    );

  } catch (error) {
    return Response.json(
      { error: "Login failed" },
      { status: 500 }
    );
  }
}
