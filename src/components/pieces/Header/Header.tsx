"use client";
import { signOut } from "next-auth/react";
import { Button, UserIcon } from "../../pieces";
import { User } from "../../../model";
import { useRouter } from "next/navigation";
import { AppRouterInstance } from "next/dist/shared/lib/app-router-context.shared-runtime";

export function Header({ user }: { user: User }) {
  const router: AppRouterInstance = useRouter();

  return (
    <header className=" shadow-lg p-10 flex flex-row justify-center gap-[75%] items-center w-[100%]">
      <h1 className=" text-[150%]">{`Bem vindo  ${user.Name}`}</h1>
      <UserIcon>
        <p className="text-[100%]">{user.Name}</p>
        <Button
          Text="Sair"
          Width="100%"
          Type="button"
          click={async (): Promise<void> => {
            await signOut({ redirect: false, callbackUrl: "/login/signIn" });
            router.replace("/login/signIn");
            return;
          }}
        />
      </UserIcon>
    </header>
  );
}
