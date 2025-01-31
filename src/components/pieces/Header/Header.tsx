"use client";
import { signOut } from "next-auth/react";
import { Button, UserIcon } from "../../pieces";
import { User } from "../../../model";
import { useRouter } from "next/navigation";
import { AppRouterInstance } from "next/dist/shared/lib/app-router-context.shared-runtime";

export function Header({ user }: { user: User }) {
  const router: AppRouterInstance = useRouter();

  return (
    <header className=" h-[228px] sticky top-0 bg-[var(--primary-light)] opacity-100 shadow-lg p-10 flex flex-row justify-center gap-[75%] items-center w-[100%]">
      <h1 className=" text-nowrap relative left-[30px] text-[120%] sm:static md:text-[130%] 2xl:text-[150%] xl:text-[140%]">{`Bem vindo  ${user.Name}`}</h1>
      <UserIcon>
        <p className="text-[100%]">{user.Name}</p>
        <Button
          Text="Sair"
          Style=" bg-[var(--primary)] border-solid border-2 text-[var(--secound)] transition-colors ease-in border-[--secound] p-4 w-[100%] text-[100%] font-semibold rounded-xl hover:bg-[var(--secound)] hover:text-[var(--primary)]"
          Type="button"
          click={async (): Promise<void> => {
            await signOut({ redirect: false });
            router.replace("/login/signIn");
            return;
          }}
        />
      </UserIcon>
    </header>
  );
}
