"use client";
import { Form_Item } from "../../pieces";
import { SyntheticEvent } from "react";
import { Button } from "../../pieces";
import { User } from "../../../model";
export function Confirm({
  Validation,
}: {
  Validation: ({ Password }: Pick<User, "Password">) => Promise<void>;
}) {
  return (
    <div className=" h-[100dvh] flex flex-col items-center justify-center">
      <form
        onSubmit={async (e: SyntheticEvent) => {
          e.preventDefault();
          const body = new FormData(e.currentTarget as HTMLFormElement);
          await Validation({ Password: body.get("password") as string });
        }}
        className=" flex flex-col items-center justify-around shadow-2xl p-10 gap-10 rounded-2xl w-[300px] sm:w-[450px] "
      >
        <h1 className=" text-center">Digite sua senha atual</h1>
        <Form_Item Input="Password" Label="Senha" Name="password" />
        <Button
          Text="Verificar"
          Style=" bg-[var(--primary)] border-solid border-2 text-[var(--secound)] transition-colors ease-in border-[--secound] p-4 w-[80%] sm:w-[50%] text-[100%] font-semibold rounded-xl hover:bg-[var(--secound)] hover:text-[var(--primary)]"
          Type="submit"
        />
      </form>
    </div>
  );
}
