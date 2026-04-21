import { db } from "../../../../lib/db";
import { ok, fail } from "../../../../lib/response";
import bcrypt from "bcryptjs";

export async function POST(req) {
  try {
    const body = await req.json();
    const { name, email, password, phoneNumber, role } = body;

    const exists = await db.user.findUnique({
      where: { email },
    });

    if (exists) return fail("Email already exists");

    const hashed = await bcrypt.hash(password, 10);

    const user = await db.user.create({
      data: {
        name,
        email,
        password: hashed,
        phoneNumber,
        role,
      },
    });

    return ok(user, "Registered successfully");
  } catch (error) {
    return fail("Registration failed", 500);
  }
}
