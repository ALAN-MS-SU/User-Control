import NextAuth from "next-auth";
import Credentials from "next-auth/providers/credentials";
import { Users } from "../../../../model/user";
const authOptions = {
  providers: [
    Credentials({
      name: "Email and Password",
      credentials: {
        email: { label: "Email", type: "email", placeholder: "Email" },
        password: { label: "Senha", type: "password", placeholder: "Sehna" },
      },

      authorize: async (credentials) => {
        const user = await Users.FindUser({
          email: credentials.email,
          password: credentials.password,
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

  pages: {
    signIn: process.env.NEXTAUTH_URL,
  },
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        
        token = user
        
      }

      return token;
    },
    async session({ session, token }) {
      if (token) {
        session.user = token;
      }
      return session;
    },
  },
};
export const handler = NextAuth(authOptions);
export { handler as GET, handler as POST, authOptions };
