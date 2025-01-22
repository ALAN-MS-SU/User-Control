import { NextRequest, NextResponse } from "next/server";
import { Users } from "../../../../model";
export async function GET(req: NextRequest) {
  const ID: number = Number.parseInt(req.nextUrl.pathname.split("/")[3]);
  const rows: Users.User[] = await Users.User.ListUsers({ ID });
  return NextResponse.json(rows);
}
