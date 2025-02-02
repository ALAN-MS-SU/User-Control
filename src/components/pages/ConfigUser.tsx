"use client";
import { ConfigForm, Confirm, input_error } from "../pieces";
import { User } from "../../model";
import { useState } from "react";
export function ConfigUser({
  Name,
  Email,
  ID,
}: Pick<User, "Email" | "Name" | "ID">) {
  const [Password, SetPassword] = useState<string>();
  async function Validation({
    Password,
  }: Pick<User, "Password">): Promise<void> {
    const body = new FormData();
    body.append("email", Email);
    body.append("password", Password);
    return await fetch(`${process.env.NEXT_PUBLIC_URL}/api/ConfigUser/${ID}`, {
      method: "POST",
      body,
    })
      .then(async (data) => {
        if (!data.ok) {
          input_error();
          throw new Error("Fetch err on ConfigUser");
        }
        return SetPassword(Password);
      })
      .catch((err) => {
        console.log(err);
      });
  }
  return Password ? (
    <ConfigForm Name={Name} Email={Email} ID={ID} Password={Password} />
  ) : (
    <Confirm Validation={Validation} />
  );
}
