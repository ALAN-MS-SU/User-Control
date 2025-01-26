"use client";
import { Button } from "./Button";
import { Form_Item } from "./Form_item";
import { SyntheticEvent } from "react";
import { useRouter } from "next/navigation";
import { AppRouterInstance } from "next/dist/shared/lib/app-router-context.shared-runtime";
import { User } from "../../../model";
export function ConfigForm({
  Name,
  Email,
  ID,
}: Pick<User, "Email" | "Name" | "ID">) {
  const router: AppRouterInstance = useRouter();
  return (
    <div className=" h-[100dvh] flex flex-col items-center justify-center">
      <form
        onSubmit={async (e: SyntheticEvent): Promise<void> => {
          e.preventDefault();
          const body = new FormData(e.currentTarget as HTMLFormElement);

          await fetch(`${process.env.NEXT_PUBLIC_URL}/api/ConfigUser/${ID}`, {
            method: "PUT",
            body,
          })
            .then((data) => {
              if (!data.ok) throw new Error("fetch err on ConfigForm");
              router.push(process.env.NEXT_PUBLIC_URL);
            })
            .catch((err) => {
              console.log(err);
              router.replace(`${process.env.NEXT_PUBLIC_URL}/login/signIn`);
            });
        }}
        className="flex flex-col shadow-2xl items-center justify-around p-10 gap-10 w-[450px] rounded-2xl"
      >
        <h1 className=" text-center">Alterar sua conta</h1>
        <Form_Item DefaultValue={Name} Label="Nome" Input="Text" Name="name" />
        <Form_Item
          DefaultValue={Email}
          Label="Email"
          Input="Email"
          Name="email"
        />
        <Form_Item Label="Nova Senha" Input="Password" Name="password" />
        <Button Text="Alterar" Width="50%" Type="submit" />
      </form>
    </div>
  );
}
