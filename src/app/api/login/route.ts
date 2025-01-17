import { NextRequest, NextResponse } from "next/server";
//import { Users } from "../../../model/user";
import { dbPool } from "../../../db/config";

export async function POST(req: NextRequest) {
  const body = await req.formData();
  const connection = await dbPool.connect();
   const data = await connection.query("select * from Password_User($1,$2)", [
     body.get("email"),
     body.get("password"),
   ]);
   try {
     console.log(data.rows);
   } catch (err) {
     console.log(err);
   }
  return new NextResponse("aqui");
}
