import { db } from "../../../../lib/db";
import { ok, fail } from "../../../../lib/response";

export async function POST(req) {
  try {
    const body = await req.json();
    const {
      name,
      tags,
      description,
      color,
      originalPrice,
      discountPrice,
      stock,
      shopId,
      categoryId,
      subCategoryId,
    } = body;
    if (
      !name ||
      !tags ||
      !description ||
      !color ||
      !originalPrice ||
      !stock ||
      !shopId ||
      !categoryId ||
      !subCategoryId
    ) {
      return fail("All fields are required", 404);
    }

    const product = await db.product.create({
      data: {
        name,
        tags,
        description,
        color,
        originalPrice,
        discountPrice,
        stock,
        shopId,
        categoryId,
        subCategoryId,
      },
    });

    return ok(product, "Product created successfull");
  } catch (error) {
    return fail("Internal server error", 500);
  }
}
