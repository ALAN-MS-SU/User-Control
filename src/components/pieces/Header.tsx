//import { AppRouterInstance } from "next/dist/shared/lib/app-router-context.shared-runtime";
//import { useRouter } from "next/navigation";

import { UserIcon } from "./";
import { getServerSession } from "next-auth";
import { Users } from "../../model/user";
import { authOptions } from "../../app/api/auth/[...nextauth]/route";
export async function Header() {
  //const Router: AppRouterInstance = useRouter();
  const session = await getServerSession(authOptions);
  const user = session.user as Users.User;
  return (
    <header className=" shadow-lg p-10 flex flex-row justify-center gap-[75%] items-center w-[100%]">
      <h1 className=" text-[150%]">{`Bem vindo ${user.Name} `}</h1>
      <UserIcon>
        <p className=" text-[100%]">{user.Name}</p>
      </UserIcon>
      
    </header>
  );
}
