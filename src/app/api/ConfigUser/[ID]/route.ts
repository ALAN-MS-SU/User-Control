import { NextRequest, NextResponse } from "next/server";
import { UserFuncs } from "../../../../model";

export async function POST(req: NextRequest) {
  const body = await req.formData();
  if (
    (await UserFuncs.FindUser({
      Email: body.get("email") as string,
      Password: body.get("password") as string,
    })) == null
  )
    throw new Error("Password invalid");
  return new NextResponse();
}

export async function PUT(req: NextRequest) {
  const body = await req.formData();
  const ID: number = Number.parseInt(req.nextUrl.pathname.split("/")[3]);
  try {
    await UserFuncs.EditUser({
      ID,
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
export async function DELETE(req: NextRequest) {
  const ID: number = Number.parseInt(req.nextUrl.pathname.split("/")[3]);
  await UserFuncs.DeleteUSer({ ID });
  return new NextResponse();
}
