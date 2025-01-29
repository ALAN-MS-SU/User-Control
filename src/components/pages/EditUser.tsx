"use client";
import { useState } from "react";
import { User } from "../../model";
import { PositionForm, Confirm } from "../pieces";
export function EditUser({ ID, Name, Position, Email }: User) {
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
      .then((data) => {
        if (!data.ok) throw new Error("fetch err on EditUser");
        SetPassword(Password);
      })
      .catch((err) => {
        console.log(err);
      });
  }
  return Password ? (
    <PositionForm ID={ID} Name={Name} Position={Position} />
  ) : (
    <Confirm Validation={Validation} />
  );
}
