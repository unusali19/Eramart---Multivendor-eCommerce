import { db } from "../../../../lib/db"
import { ok, fail } from "../../../../lib/response";


export async function POST(req) {
  try {
    const { name } = await req.json();

    if (!name) {
      return fail("Category name is required", 400);
    }

    const exists = await db.category.findUnique({
      where: { name },
    });

    if (exists) {
      return fail("Category already exists", 409);
    }

    const category = await db.category.create({
      data: { name },
    });

    return ok(category, "Category created successfully", 201);
  } catch (error) {
    console.error(error);
    return fail("Internal server error", 500);
  }
}