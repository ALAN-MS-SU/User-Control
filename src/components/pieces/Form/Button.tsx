"use client";
export function Button({
  Text,
  Width,
  Type,
  click,
}: {
  Text: string;
  Width: string;
  Type: "submit" | "button" | "reset";
  click?: () => Promise<void>;
}) {
  return (
    <button
      style={{ width: Width }}
      type={Type}
      onClick={() => {
        if (click) {
          click();
        }
        return;
      }}
      className=" bg-[var(--primary)] border-solid border-2 text-[var(--secound)] transition-colors ease-in border-[--secound]  p-4 font-semibold rounded-xl hover:bg-[var(--secound)] hover:text-[var(--primary)]"
    >
      {Text}
    </button>
  );
}
