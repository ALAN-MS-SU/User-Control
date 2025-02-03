import NextAuth from "next-auth";
import { authOptions } from "../../../../model/Provider/auth";

const handler = NextAuth(authOptions);
export { handler as GET, handler as POST };
