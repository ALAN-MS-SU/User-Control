import { NextRequest, NextResponse } from "next/server";
import { User, ListUsers } from "../../../../model";
export async function GET(req: NextRequest) {
  const ID: number = Number.parseInt(req.nextUrl.pathname.split("/")[3]);
  const rows: User[] = await ListUsers({ ID });
  return NextResponse.json(rows);
}
