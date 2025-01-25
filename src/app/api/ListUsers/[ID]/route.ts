import { NextRequest, NextResponse } from "next/server";
import { User, UserFuncs } from "../../../../model";
export async function GET(req: NextRequest) {
  const ID: number = Number.parseInt(req.nextUrl.pathname.split("/")[3]);
  const rows: User[] = await UserFuncs.ListUsers({ ID });
  return NextResponse.json(rows);
}
