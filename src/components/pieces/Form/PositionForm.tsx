"use client";
import { Button } from "./Button";
import { User } from "../../../model";
import { Form_Item } from "./Form_item";
import { SyntheticEvent } from "react";
import { useRouter } from "next/navigation";

export function PositionForm({ ID, Name, Position }: User) {
  const router = useRouter();
  return (
    <div className=" h-[100dvh] flex flex-col items-center justify-center">
      <form
        onSubmit={async (e: SyntheticEvent) => {
          e.preventDefault();
          const body: FormData = new FormData(
            e.currentTarget as HTMLFormElement
          );
          await fetch(`${process.env.NEXT_PUBLIC_URL}/api/EditPosition/${ID}`, {
            method: "PUT",
            body,
          })
            .then((data) => {
              if (!data.ok) {
                console.log(data);
                throw new Error("Fetch err on PositionForm");
              }
              router.push("/");
            })
            .catch((err) => {
              console.log(err);
              router.replace("/login/signIn");
            });
        }}
        className=" flex flex-col items-center justify-around shadow-2xl p-10 gap-10 w-[450px] rounded-2xl"
      >
        <h1 className=" text-[120%] text-center">
          {`Usuário: ${Name}`}
          <br />
          {` Cargo atual: ${Position}`}
        </h1>
        <Form_Item
          Label="Cargo"
          Select={true}
          DefaultValue={Position.toString()}
          Items={["USER", "ADMIN"]}
          Name="Position"
        />
        <Button Text="Alterar" Width="50%" Type="submit" />
      </form>
    </div>
  );
}
