"use client";
import { useRouter } from "next/navigation";
import { AppRouterInstance } from "next/dist/shared/lib/app-router-context.shared-runtime";
import { FaUser } from "react-icons/fa";
export function UserIcon({children}:{children:React.ReactNode}) {
  const Router: AppRouterInstance = useRouter();
 
  return<div
          onClick={() => Router.push("/login/login")}
          className=" flex flex-col items-center transition-colors ease-in-out hover:text-[var(--secound-hover)]"
        >
          <FaUser className=" border-solid text-[400%]  cursor-pointer border-[2px] rounded-full border-[var(--secound)] hover:border-[var(--secound-hover)]" />
          {children}
        </div> 
}
