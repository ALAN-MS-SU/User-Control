import { authOptions } from "../../app/api/auth/[...nextauth]/route";
import { Users } from "../../model";
import { Header } from "../pieces/";
import { getServerSession } from "next-auth";
export async function Home() {
  const session = await getServerSession(authOptions)
  return (
    <>
      <Header user={session.user as Users.User} />
    </>
  );
}
