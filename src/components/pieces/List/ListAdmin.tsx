"use server";
import { Users } from "../../../model";
import { ListLine } from "./ListLine";
export async function ListAdmin({ user }: { user: Users.User }) {
  const Lines: Users.User[] =
    (await fetch(`${process.env.NEXT_PUBLIC_URL}/api/ListUsers/${user.ID}`, {
      method: "GET",
    })
      .then(async (response) => {
        if (!response.ok) {
          return console.log(response);
        }

        return (await response.json()) as Users.User[];
      })
      .catch((err) => {
        console.log(err);
        return;
      })) || [];
  return (
    <div className="flex justify-center">
      <div className="flex flex-col shadow-2xl mt-[100px] p-10 gap-10 rounded-2xl w-[80%]">
        <h1 className=" text-center text-[200%] font-semibold">
          Lista de usuários cadastrados
        </h1>
        <table className=" table-fixed w-full text-[120%] border-[2px] border-solid border-[var(--secound)] text-center">
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
