"use server";
import { User } from "../../../model";
import { ListLine } from "./ListLine";
export async function ListAdmin({ user }: { user: User }) {
  const Lines: User[] =
    (await fetch(`${process.env.NEXT_PUBLIC_URL}/api/ListUsers/${user.ID}`, {
      method: "GET",
    })
      .then(async (response) => {
        if (!response.ok) {
          return console.log(response);
        }

        return (await response.json()) as User[];
      })
      .catch((err) => {
        console.log(err);
        return;
      })) || [];
  return (
    <div className="flex justify-center min-h-[calc(100dvh-428px)]">
      <div className="flex flex-col shadow-2xl mt-[50px] mb-[50px] p-10 pr-0 pl-0 gap-10 rounded-2xl w-full sm:w-[90%] md:pr-10 md:pl-10 md:w-[80%]">
        <h1 className=" text-center text-[150%] sm:text-[160%] md:text-[180%] lg:text-[200%] font-semibold text-nowrap">
          Lista de usuários cadastrados
        </h1>
        <table className=" table-fixed w-full text-[90%] sm:text-[100%] md:text-[110%] lg:text-[120%] border-[2px] border-solid border-[var(--secound)] text-center">
          <thead>
            <tr>
              <th className=" p-[20px] border-[2px] border-solid border-[var(--secound)]">
                Nome
              </th>
              <th
                colSpan={2}
                className=" p-[20px] border-[2px] border-solid border-[var(--secound)]"
              >
                Gargo
              </th>
              <th className=" p-[20px] border-[2px] border-solid border-[var(--secound)]">
                Email
              </th>
            </tr>
          </thead>
          <tbody>
            {Lines.map((line, index) => {
              return (
                <ListLine
                  key={index}
                  Edit={true}
                  ID={line.ID}
                  Name={line.Name}
                  Email={line.Email}
                  Position={line.Position}
                />
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}
