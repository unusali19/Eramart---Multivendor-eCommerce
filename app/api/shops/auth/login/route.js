import { db } from "../../../../../lib/db";
import { ok, fail } from "../../../../../lib/response";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

export async function POST(req){
    try {
        const {email,password} = await req.json();
         
        const shop = await db.shop.findUnique({
              where: { email },
            });
        
            if (!shop) return fail("Invalid credentials", 401);
        
            const match = await bcrypt.compare(password, shop.password);
            if (!match) return fail("Invalid credentials", 401);
        
            const token = jwt.sign(
              { id: shop.id, role: shop.role },
              process.env.JWT_SECRET_KEY,
              { expiresIn: process.env.JWT_EXPIRES },
            );
            return ok({ token, shop }, "Login success");
        
    } catch (error) {
        return fail("Internal server error",500);
    }
}