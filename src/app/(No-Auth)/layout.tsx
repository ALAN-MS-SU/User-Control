import { getServerSession } from "next-auth";
import { NextAuthSessionProviderProps } from "../../model";
import { authOptions } from "../../model";
import { redirect } from "next/navigation";
export default async function AdminLayout({
  children,
}: NextAuthSessionProviderProps) {
  const session = await getServerSession(authOptions);
  if (session != null) {
    redirect("/");
  }
  return <>{children}</>;
}
