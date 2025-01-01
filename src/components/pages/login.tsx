import { Form_Item } from "@/components/pieces";
import Link from "next/link";
export function Login() {
  return (
    <div className=" h-[100dvh] flex flex-col items-center justify-center">
      <form className=" flex flex-col items-center justify-around shadow-2xl p-10 gap-10 w-[450px]">
        <h1 className=" text-center">Entrar</h1>
        <Form_Item Input="email" Label="Email" Name="email" />
        <Form_Item Input="password" Label="Senha" Name="password" />
        <button
          type="submit"
          className=" bg-[var(--primary)] border-solid border-2 text-[var(--secound)] transition-colors border-[--secound]  p-4 font-semibold w-[50%] rounded-xl hover:bg-[var(--secound)] hover:text-[var(--primary)]"
        >
          Entrar
        </button>
        <div>
          <Link className=" text-blue-700" href={"new"}>New account</Link>
        </div>

          
      </form>
    </div>
  );
}
