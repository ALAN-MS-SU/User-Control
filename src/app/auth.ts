import NextAuth from "next-auth";
import Credentials from "next-auth/providers/credentials";
import { UserAuth } from "../model";
export const authOptions = {
  providers: [
    Credentials({
      name: "Email and Password",
      credentials: {
        email: { label: "Email", type: "email", placeholder: "Email" },
        password: { label: "Senha", type: "password", placeholder: "Sehna" },
      },
      authorize: async (credentials) => {
        const user = await UserAuth.FindUser({
          Email: credentials.email,
          Password: credentials.password,
        });
        if (user) {
          return Promise.resolve({
            ID: user.ID,
            Name: user.Name,
            Email: user.Email,
            Position: user.Position,
          });
        }
        return Promise.resolve(null);
      },
    }),
  ],
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        token.user = user;
        token.exp = Date.now() + 3600000;
      }
      if (Date.now() > token.exp) {
        return {
          ...token,
        };
      }
      return token;
    },
    async session({ session, token }) {
      if (token) {
        session.user = token.user;
        if (token.exp) {
          session.exp = token.exp;
        }
      }
      return session;
    },
  },
};
export const handler = NextAuth(authOptions);