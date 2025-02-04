"use server";
import { authOptions } from "../../app/auth";
import { User } from "../../model";
import { Header, ListUser, ListAdmin, Footer } from "../pieces";
import { getServerSession } from "next-auth";
export async function Home() {
  const session = await getServerSession(authOptions);

  return (
    <>
      <Header user={session.user as User} />
      {session.user.Position === "ADMIN" ? (
        <ListAdmin user={session.user as User} />
      ) : (
        <ListUser user={session.user as User} />
      )}
      <Footer />
    </>
  );
}
