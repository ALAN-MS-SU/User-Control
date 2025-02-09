"use client";
import Link from "next/link";
import { Button } from "./Button";
import { Form_Item, input_error } from "./Form_item";
import { SyntheticEvent } from "react";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
import { AppRouterInstance } from "next/dist/shared/lib/app-router-context.shared-runtime";
export function New() {
  const router: AppRouterInstance = useRouter();
  return (
    <div className=" h-[100dvh] flex flex-col items-center justify-center">
      <form
        onSubmit={async (e: SyntheticEvent): Promise<void> => {
          e.preventDefault();
          const body = new FormData(e.currentTarget as HTMLFormElement);
          await fetch(`${process.env.NEXT_PUBLIC_URL}/api/newUser`, {
            method: "POST",
            body,
          })
            .then(async (data) => {
              if (!data.ok) {
                input_error();
                return console.log(data);
              }
              await signIn("credentials", {
                redirect: false,
                email: body.get("email") as string,
                password: body.get("password") as string,
              }).then((data) => {
                if (!data.ok) {
                  input_error();
                  return console.log(data);
                }
                router.replace(process.env.NEXT_PUBLIC_URL);
              });
            })
            .catch((err) => {
              return console.log(err);
            });
        }}
        className="flex flex-col shadow-2xl items-center justify-around p-10 gap-10 rounded-2xl w-[300px] pr-4 pl-4 sm:pr-10 sm:pl-10 sm:w-[450px]"
      >
        <h1 className=" text-center">Nova conta</h1>
        <Form_Item Label="Nome" Input="Text" Name="name" />
        <Form_Item Label="Email" Input="Email" Name="email" />
        <Form_Item Label="Senha" Input="Password" Name="password" />
        <Button
          Text="Criar"
          Style=" bg-[var(--primary)] border-solid border-2 text-[var(--secound)] transition-colors ease-in border-[--secound] p-4 text-[100%] font-semibold rounded-xl w-[60%] sm:w-[50%] hover:bg-[var(--secound)] hover:text-[var(--primary)]"
          Type="submit"
        />
        <Link className="text-blue-700 underline" href={"signIn"}>
          Já tenho uma conta
        </Link>
      </form>
    </div>
  );
}
