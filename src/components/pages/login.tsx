"use client";
import { signIn } from "next-auth/react";
import { Form_Item } from "../pieces";
import { SyntheticEvent } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { Button } from "../pieces";
export function Login() {
  const router = useRouter();
  return (
    <div className=" h-[100dvh] flex flex-col items-center justify-center">
      <form
        onSubmit={async (e: SyntheticEvent) => {
          e.preventDefault();
          const body: FormData = new FormData(
            e.currentTarget as HTMLFormElement
          );
          const result = await signIn("credentials", {
            redirect: false,
            email: body.get("email") as string,
            password: body.get("password") as string,
          });
          console.log(result);
          if (result?.error) {
            return console.log(result.error);
          }
          return router.replace(process.env.NEXT_PUBLIC_URL);
        }}
        className=" flex flex-col items-center justify-around shadow-2xl p-10 gap-10 w-[450px]"
      >
        <h1 className=" text-center">Entrar</h1>
        <Form_Item Input="email" Label="Email" Name="email" />
        <Form_Item Input="password" Label="Senha" Name="password" />
        <Button Text="Entrar" width="50%" />
        <div>
          <Link className=" text-blue-700" href={"new"}>
            Nova Conta
          </Link>
        </div>
      </form>
    </div>
  );
}
