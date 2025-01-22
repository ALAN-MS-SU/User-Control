"use client";
import Link from "next/link";
import { Button } from "./Button";
import { Form_Item } from "./Form_item";
import { SyntheticEvent } from "react";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
export function New() {
  const router = useRouter();
  return (
    <div className=" h-[100dvh] flex flex-col items-center justify-center">
      <form
        onSubmit={async (e: SyntheticEvent): Promise<void> => {
          e.preventDefault();
          const Formdata = new FormData(e.currentTarget as HTMLFormElement);
          await fetch(`${process.env.NEXT_PUBLIC_URL}/api/newUser`, {
            method: "POST",
            body: Formdata,
          })
            .then(async (data) => {
              if (!data.ok) {
                return console.log(data);
              }
              await signIn("credentials", {
                redirect: false,
                email: Formdata.get("email") as string,
                password: Formdata.get("password") as string,
              }).then((data) => {
                if (!data.ok) {
                  return console.log(data);
                }
                router.replace(process.env.NEXT_PUBLIC_URL);
              });
            })
            .catch((err) => {
              return console.log(err);
            });
        }}
        className="flex flex-col shadow-2xl items-center justify-around p-10 gap-10 w-[450px] rounded-2xl"
      >
        <h1 className=" text-center">Nova conta</h1>
        <Form_Item Label="Nome" Input="Text" Name="name" />
        <Form_Item Label="Email" Input="Email" Name="email" />
        <Form_Item Label="Senha" Input="Password" Name="password" />
        <Button Text="Criar" width="50%" />
        <Link className="text-blue-700 underline" href={"singIn"}>
          Já tenho uma conta
        </Link>
      </form>
    </div>
  );
}
