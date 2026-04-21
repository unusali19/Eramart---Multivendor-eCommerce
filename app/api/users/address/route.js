import { db } from "../../../../lib/db";
import { ok, fail } from "../../../../lib/response";

export async function POST(req) {
  try {
    const body = await req.json();
    const { userId, country, city, address1, address2, zipCode, type } = body;

    // Validation
    if (!userId || !country || !city || !type) {
      return fail("All fields are required", 400); 
    }

    const address = await db.address.create({
      data: {
        userId,
        country,
        city,
        address1: address1 || null,     
        address2: address2 || null,
        zipCode: zipCode || null,
        type,
      },
    });

    return ok(address, "Address added successfully");
    
  } catch (error) {
    return fail("Failed to add address",500);
  }
}