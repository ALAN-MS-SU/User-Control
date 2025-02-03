import { getServerSession } from "next-auth";
import { NextAuthSessionProviderProps } from "../../model";
import { authOptions } from "../../model";
import { redirect } from "next/navigation";
export default async function UserLayout({
  children,
}: NextAuthSessionProviderProps) {
  const session = await getServerSession(authOptions);
  if (!session?.user) {
    redirect("/login/signIn");
  }
  return <>{children}</>;
}
