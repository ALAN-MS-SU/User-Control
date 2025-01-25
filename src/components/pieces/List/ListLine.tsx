"use client";
import { Users } from "../../../model";
import { Button } from "../";
import { useRouter } from "next/navigation";
import { AppRouterInstance } from "next/dist/shared/lib/app-router-context.shared-runtime";
export function ListLine({
  Name,
  Email,
  Position,
  ID,
  Edit,
}: {
  Name: string;
  Email: string;
  Position: Users.Position;
  ID?: number;
  Edit?: boolean;
}) {
  const router: AppRouterInstance = useRouter();
  return (
    <tr>
      <td className=" p-[20px] border-[2px] border-solid border-[var(--secound)]">
        {Name}
      </td>
      <td className=" p-[20px] border-[2px] border-solid border-[var(--secound)]">
        {Position}
      </td>
      {Edit && (
        <td className=" p-[20px] border-[2px] border-solid border-[var(--secound)]">
          <Button
            Text="Editar"
            Width="40%"
            Type="button"
            click={async (): Promise<void> => {
              router.push(`/EditPosition/${ID}`);
            }}
          ></Button>
        </td>
      )}
      <td className=" p-[20px] border-[2px] border-solid border-[var(--secound)]">
        {Email}
      </td>
    </tr>
  );
}
