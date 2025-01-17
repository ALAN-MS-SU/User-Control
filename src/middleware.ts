//import { Users } from "../model/user";
//import { getSession } from "next-auth/react";
import { RequestCookie } from "next/dist/compiled/@edge-runtime/cookies";
import { NextResponse, NextRequest } from "next/server";

export async function middleware(req: NextRequest) {
  const session:RequestCookie = req.cookies.get("next-auth.session-token");
   if (!session) {
        return NextResponse.redirect(new URL("/login/login", req.url));
   }
   return NextResponse.next();

  //    if (!session) {
  //         NextResponse.redirect(new URL("/login/login", req.url));

  //    }
  //   NextResponse.next();
  //   return NextResponse.redirect(new URL("/login/new", req.url));
  //   NextResponse.next();
}
export const config = {
  matcher: ["/"],
};
