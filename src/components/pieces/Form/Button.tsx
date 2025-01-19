"use client"
export function Button({ Text, width, click }: { Text: string; width: string, click?: () => Promise<void> }) {
  return (
    <button
      style={{ width: width }}
      type="submit"
      onClick={() => {
        if (click) {
          click()
        }
        return
      }}
      className=" bg-[var(--primary)] border-solid border-2 text-[var(--secound)] transition-colors border-[--secound]  p-4 font-semibold rounded-xl hover:bg-[var(--secound)] hover:text-[var(--primary)]"
    >
      {Text}
    </button>
  );
}
