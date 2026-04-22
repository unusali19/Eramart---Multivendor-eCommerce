import { db } from "../../../../../lib/db";
import { ok, fail } from "../../../../../lib/response";
import bcrypt from "bcryptjs";

export async function POST(req) {
  try {
    const body = await req.json();

    const {
      name,
      email,
      password,
      phoneNumber,
      description,
      address,
      zipCode,
      role,
    } = body;

    // Validation
    if (!name || !email || !password || !address) {
      return fail("Required fields are missing", 400);
    }

    const exists = await db.shop.findUnique({
      where: { email },
    });

    if (exists) {
      return fail("Shop already registered", 409);
    }

    const hashed = await bcrypt.hash(password, 10);

    const shop = await db.shop.create({
      data: {
        name,
        email,
        password: hashed,
        phoneNumber,
        description,
        address,
        zipCode,
        role,
      },
    });

    return ok(shop, "Shop created successfully", 201);
  } catch (error) {
    console.error(error);
    return fail("Internal Server Error", 500);
  }
}