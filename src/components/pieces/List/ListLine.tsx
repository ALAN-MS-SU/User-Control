import { Users } from "../../../model";

export function ListLine({
  Name,
  Email,
  Position,
}: {
  Name: string;
  Email: string;
  Position: Users.Position;
}) {
  return (
    <tr>
      <td className=" p-[20px] border-[2px] border-solid border-[var(--secound)]">
        {Name}
      </td>
      <td className=" p-[20px] border-[2px] border-solid border-[var(--secound)]">
        {Position}
      </td>
      <td className=" p-[20px] border-[2px] border-solid border-[var(--secound)]">
        {Email}
      </td>
    </tr>
  );
}
