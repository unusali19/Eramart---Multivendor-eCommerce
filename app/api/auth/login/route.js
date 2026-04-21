import { db } from "../../../../lib/db";
import { ok, fail } from "../../../../lib/response";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

export async function POST(req) {
  try {
    const { email, password } = await req.json();

    const user = await db.user.findUnique({
      where: { email },
    });

    if (!user) return fail("Invalid credentials", 401);

    const match = await bcrypt.compare(password, user.password);
    if (!match) return fail("Invalid credentials", 401);

    const token = jwt.sign(
      { id: user.id, role: user.role },
      process.env.JWT_SECRET_KEY,
      { expiresIn: process.env.JWT_EXPIRES },
    );
    return ok({ token, user }, "Login success");
  } catch (error) {
    return fail("Login failed", 500);
  }
}

