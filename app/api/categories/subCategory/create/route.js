import {db} from "../../../../../lib/db";
import {ok,fail} from "../../../../../lib/response";

export async function POST(req){
  try {
    const body = await req.json();
    const {name,categoryId} = body;
    if(!name || !categoryId) return fail("All fields are required", 404);

    const subCategory = await db.subCategory.create({
        data:{
            name,
            categoryId
        }
    })
    return ok(subCategory, "SubCategory created successfull");
    
  } catch (error) {
    return fail("Internal server error",500);
    
  }
}