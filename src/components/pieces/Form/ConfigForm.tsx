"use client";
import { Button } from "./Button";
import { Form_Item } from "./Form_item";
import { SyntheticEvent } from "react";
import { useRouter } from "next/navigation";
import { AppRouterInstance } from "next/dist/shared/lib/app-router-context.shared-runtime";
import { User } from "../../../model";
import { signIn, signOut } from "next-auth/react";
export function ConfigForm({
  Name,
  Email,
  Password,
  ID,
}: Pick<User, "Email" | "Name" | "ID" | "Password">) {
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
            .then(async (data) => {
              if (!data.ok) throw new Error("fetch err on ConfigForm");
              await signIn("credentials", {
                redirect: false,
                email: Email,
                password: Password,
              });
              router.push(process.env.NEXT_PUBLIC_URL);
            })
            .catch((err) => {
              console.log(err);
              router.replace(`${process.env.NEXT_PUBLIC_URL}/login/signIn`);
            });
        }}
        className="flex flex-col shadow-2xl p-10 items-center justify-around  gap-10 rounded-2xl w-[300px] pr-4 pl-4 sm:pr-10 sm:pl-10 sm:w-[450px]"
      >
        <h1 className=" text-center">Alterar sua conta</h1>
        <Form_Item DefaultValue={Name} Label="Nome" Input="Text" Name="Name" />
        <Form_Item
          DefaultValue={Email}
          Label="Email"
          Input="Email"
          Name="Email"
        />
        <Form_Item
          Label="Senha"
          DefaultValue={Password}
          Input="Password"
          Name="Password"
        />
        <div className=" w-full flex justify-between">
          <Button
            Text="Alterar"
            Style=" bg-[var(--primary)] border-solid border-2 text-[var(--secound)] transition-colors ease-in border-[--secound] p-4 text-[100%] font-semibold rounded-xl hover:bg-[var(--secound)] w-[45%] sm:w-[40%] hover:text-[var(--primary)]"
            Type="submit"
          />
          <Button
            Text="Deletar"
            Style=" bg-[var(--primary)] border-solid border-2 text-[var(--secound)] transition-colors ease-in border-[--secound] p-4 text-[100%] font-semibold rounded-xl hover:bg-[var(--secound)] w-[45%] sm:w-[40%] hover:text-[var(--primary)]"
            Type="button"
            click={async () => {
              await fetch(
                `${process.env.NEXT_PUBLIC_URL}/api/ConfigUser/${ID}`,
                {
                  method: "DELETE",
                }
              )
                .then(async (data) => {
                  if (!data.ok) {
                    router.replace(
                      `${process.env.NEXT_PUBLIC_URL}/login/signIn`
                    );
                  }
                  await signOut({ redirect: false });
                  router.replace(`${process.env.NEXT_PUBLIC_URL}/login/signIn`);
                })
                .catch((err) => {
                  console.log(err);
                  router.replace(`${process.env.NEXT_PUBLIC_URL}/login/signIn`);
                });
              return;
            }}
          />
        </div>
      </form>
    </div>
  );
}
