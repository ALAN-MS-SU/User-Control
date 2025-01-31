"use server";
import { FaSquareGithub } from "react-icons/fa6";
import Link from "next/link";
export async function Footer() {
  return (
    <footer className="bg-[var(--primary-light)] h-[200px] opacity-100 border-t-[2px] border-solid border-[var(--secound-light)]  p-10 flex flex-row justify-center gap-[50%] items-center w-[100%]">
      <h1 className="font-bold">Feito por: ALAN-MS-SU 2025</h1>
      <Link href={"https://github.com/ALAN-MS-SU"}>
        <FaSquareGithub className=" rounded-2xl text-[400%] text-[var(--secound)] transition-all ease-in-out duration-300 hover:text-[600%]" />
      </Link>
    </footer>
  );
}
