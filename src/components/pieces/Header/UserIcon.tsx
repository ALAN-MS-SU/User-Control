"use client";
import { FaUser } from "react-icons/fa";
import { useRouter } from "next/navigation";
import { AppRouterInstance } from "next/dist/shared/lib/app-router-context.shared-runtime";
export function UserIcon({ children }: { children: React.ReactNode }) {
  const router: AppRouterInstance = useRouter();
  return (
    <div className=" flex flex-col items-center transition-colors ease-in-out">
      <FaUser
        onClick={() => router.push(`/ConfigUser`)}
        className=" text-[var(--secound)] transition-all cursor-pointer border-solid text-[400%] border-[2px] rounded-full border-[var(--secound)] hover:border-[var(--secound-hover)] hover:text-[var(--secound-hover)]"
      />
      {children}
    </div>
  );
}
