import { getServerSession } from "next-auth";
import { NextAuthSessionProviderProps } from "../../model";
<<<<<<< HEAD
import { authOptions } from "../auth";
=======
import { authOptions } from "../../model";
>>>>>>> refs/remotes/origin/main
import { redirect } from "next/navigation";
export default async function AdminLayout({
  children,
}: NextAuthSessionProviderProps) {
  const session = await getServerSession(authOptions);
  if (!session || session.user.Position != "ADMIN") {
    redirect("/");
  }
  return <>{children}</>;
}
