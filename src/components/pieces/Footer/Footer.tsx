"use server";
import { FaSquareGithub } from "react-icons/fa6";
import Link from "next/link";
export async function Footer() {
  return (
    <footer className="bg-[var(--primary-light)] h-[200px] opacity-100 border-t-[2px] border-solid border-[var(--secound-light)] p-10 flex flex-row justify-center items-center w-[100%] gap-[30%] sm:gap-[35%] md:gap-[40%] lg:gap-[50%]">
      <h1 className="md:text-[100%] text-[90%] text-nowrap font-bold">Feito por: ALAN-MS-SU 2025</h1>
      <Link href={"https://github.com/ALAN-MS-SU"}>
        <FaSquareGithub className="rounded-2xl text-[400%] text-[var(--secound)] transition-all ease-in-out duration-300 hover:text-[600%]" />
      </Link>
    </footer>
  );
}
