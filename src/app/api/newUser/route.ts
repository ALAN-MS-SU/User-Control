import { NextRequest, NextResponse } from "next/server";
import { UserFuncs } from "../../../model";

export async function POST(req: NextRequest) {
  try {
    const body = await req.formData();
    await UserFuncs.CreateUser({
      Name: body.get("name") as string,
      Email: body.get("email") as string,
      Password: body.get("password") as string,
    });
    return new NextResponse();
  } catch (err) {
    console.log(err);
    return NextResponse.error();
  }
}
