"use client";
import { signIn } from "next-auth/react";
import { Form_Item } from "../../pieces";
import { SyntheticEvent } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { Button } from "../../pieces";
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
          await signIn("credentials", {
            redirect: false,
            email: body.get("email") as string,
            password: body.get("password") as string,
          }).then((data) => {
            if (!data.ok) {
              return console.log(data);
            }
            router.replace(process.env.NEXT_PUBLIC_URL);
          });
        }}
        className=" flex flex-col items-center justify-around shadow-2xl p-10 gap-10 w-[450px] rounded-2xl"
      >
        <h1 className=" text-center">Entrar</h1>
        <Form_Item Input="Email" Label="Email" Name="email" />
        <Form_Item Input="Password" Label="Senha" Name="password" />
        <Button Text="Entrar" Style=" bg-[var(--primary)] border-solid border-2 text-[var(--secound)] transition-colors ease-in border-[--secound] p-4 w-[50%] text-[100%] font-semibold rounded-xl hover:bg-[var(--secound)] hover:text-[var(--primary)]" Type="submit" />
        <div>
          <Link className=" text-blue-700 underline" href={"new"}>
            Nova Conta
          </Link>
        </div>
      </form>
    </div>
  );
}
