import { NextRequest, NextResponse } from "next/server";
import { UserFuncs, User, Position } from "../../../../model";
export async function GET(req: NextRequest) {
  const ID: number = Number.parseInt(req.nextUrl.pathname.split("/")[3]);
  const user: User = await UserFuncs.EditPosition({ ID, GET: true });
  return NextResponse.json(user);
}
export async function PUT(req: NextRequest) {
  const ID: number = Number.parseInt(req.nextUrl.pathname.split("/")[3]);
  const body = await req.formData();
  await UserFuncs.EditPosition({ID,Position:body.get("Position") as Position});
  return new NextResponse();
}
