'use client'
import { FaUser } from "react-icons/fa";
import { useRouter } from "next/navigation";
import { AppRouterInstance } from "next/dist/shared/lib/app-router-context.shared-runtime";
export function Header(){
    const Router:AppRouterInstance = useRouter();
    return(
        <header className=" shadow-lg p-10 flex flex-row justify-center gap-[75%] items-center w-[100%]">
           <h1 className=" text-[150%]">Bem vindo</h1>
           <div onClick={()=>Router.push('login/login')} className=" flex flex-col items-center transition-colors ease-in-out text-[var(--secound)] hover:text-[#333]">
            <FaUser className="  text-[400%]  cursor-pointer border-[2px] rounded-full border-solid "/>
            <p className=" text-[100%]">Entrar</p>
           </div>
           
        </header>
    )
}