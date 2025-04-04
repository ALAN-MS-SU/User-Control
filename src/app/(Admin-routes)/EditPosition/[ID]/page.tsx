"use server";
import { EditUser } from "../../../..//components/pages";
import { User } from "../../../../model";
import { getServerSession } from "next-auth";
import { authOptions } from "../../../auth";
import { redirect } from "next/navigation";
export default async function EditPosition({ params }) {
  const { ID } = await params;
  const session = await getServerSession(authOptions);
  const user: User = await fetch(
    `${process.env.NEXT_PUBLIC_URL}/api/EditPosition/${ID}`,
    {
      method: "GET",
      credentials: "include",
      headers: {
        "Content-Type": "application/json",
      },
    }
  ).then(async (data) => {
    if (!data.ok) {
      console.log(data);
      throw new Error("User err on Edit client");
    }
    return (await data.json()) as User;
  });
  if (user.Position == "ADMIN") {
    redirect("/");
  }
  return (
    <EditUser
      Email={session.user.Email}
      ID={user.ID}
      Name={user.Name}
      Position={user.Position}
    />
  );
}
