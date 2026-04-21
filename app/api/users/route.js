import { db } from "../../../lib/db";
import { ok, fail } from "../../../lib/response";

export async function GET() {
  try {
    const users = await db.user.findMany({
      orderBy: {
        createdAt: "desc",
      },
      include: {
        addresses: true,
      },
    });
    if (users.length === 0) return fail("No User Found");

    return ok(users, "Users get success");
  } catch (error) {
    return fail("Internal server error", 500);
  }
}
