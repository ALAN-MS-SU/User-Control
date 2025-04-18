import { NextRequest, NextResponse } from "next/server";
import { UserEdit, UserAuth } from "../../../../model";

export async function POST(req: NextRequest) {
  const body = await req.formData();
  if (
    (await UserAuth.FindUser({
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
    await UserEdit.EditUser({
      ID,
      Name: body.get("Name") as string,
      Email: body.get("Email") as string,
      Password: body.get("Password") as string,
    });
    return new NextResponse();
  } catch (err) {
    console.log(err);
    return NextResponse.error();
  }
}
export async function DELETE(req: NextRequest) {
  const ID: number = Number.parseInt(req.nextUrl.pathname.split("/")[3]);
  await UserEdit.DeleteUSer({ ID });
  return new NextResponse();
}
