"use client";
import { Position } from "../../../model";
import { Button } from "../Form/Button";
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
  Position: Position;
  ID?: number;
  Edit?: boolean;
}) {
  const router: AppRouterInstance = useRouter();
  return (
    <tr className=" h-[110px]">
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
            Style=" bg-[var(--primary)] border-solid border-2 text-[var(--secound)] transition-colors ease-in border-[--secound] font-semibold rounded-xl hover:bg-[var(--secound)] hover:text-[var(--primary)]md:text-[80%] sm:w-[90%]  p-4 w-[100%] text-[95%] xl:w-[45%] lg:text-[90%] lg:w-[60%] md:w-[80%]"
            Type="button"
            click={async (): Promise<void> => {
              router.push(`/EditPosition/${ID}`);
            }}
          ></Button>
        </td>
      )}
      <td className=" text-[80%] xl:text-[90%]  border-[2px] border-solid border-[var(--secound)]">
        <p className=" w-full break-words">{Email}</p>
      </td>
    </tr>
  );
}
