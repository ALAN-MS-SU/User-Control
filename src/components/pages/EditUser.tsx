"use server";
import { User } from "../../model";
import { PositionForm } from "../pieces";
export async function EditUser({ ID }: { ID: string }) {
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
  return (
    <div className=" h-[100dvh] flex flex-col items-center justify-center">
      <PositionForm
        ID={Number.parseInt(ID)}
        Name={user.Name}
        Position={user.Position}
      />
    </div>
  );
}
