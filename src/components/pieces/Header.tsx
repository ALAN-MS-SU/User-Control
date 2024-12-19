import { FaUser } from "react-icons/fa";
export function Header(){

    return(
        <header className=" shadow-lg p-10 flex flex-row justify-center gap-[75%] items-center w-[100%]">
           <h1 className=" text-2xl">Bem vindo</h1>
           <div className=" flex flex-col items-center transition-colors ease-in-out text-[var(--secound)] hover:text-[#333]">
            <FaUser className="  size-16  cursor-pointer border-[2px] rounded-full border-solid "/>
            <p>Entrar</p>
           </div>
           
        </header>
    )
}