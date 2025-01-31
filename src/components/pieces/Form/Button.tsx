"use client";
export function Button({
  Text,
  Type,
  click,
  Style
}: {
  Text: string;
  Style: string;
  Type: "submit" | "button" | "reset";
  click?: () => Promise<void>;
}) {
  return (
    <button
     
      type={Type}
      onClick={() => {
        if (click) {
          click();
        }
        return;
      }}
      className={Style}
    >
      {Text}
    </button>
  );
}
