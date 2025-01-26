import { RequestCookie } from "next/dist/compiled/@edge-runtime/cookies";
import { NextResponse, NextRequest } from "next/server";
export async function middleware(req: NextRequest) {
  if (req.method != "GET") {
    const session: RequestCookie = req.cookies.get("next-auth.session-token");
  if (!session) {
    throw new Error("Middleware err");
  }
  }
  return NextResponse.next();
}
export const config = {
  matcher: ["/api/ConfigUser/:ID", "/api/EditPosition/:ID"],
};
