"use server"
import { authOptions } from "../../app/api/auth/[...nextauth]/route";
import { Users } from "../../model";
import { Header,ListUser,ListAdmin } from "../pieces";
import { getServerSession } from "next-auth";
export async function Home() {
  const session = await getServerSession(authOptions)
  return (
    <>
      <Header user={session.user as Users.User} />
      {session.user.Position === "ADMIN" ? (
        <ListAdmin user={session.user as Users.User} />
      ) : (
        <ListUser user={session.user as Users.User} />
      )}
    </>
  );
}
