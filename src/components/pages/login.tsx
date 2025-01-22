"use client";
import { useParams } from "next/navigation";
import { Login, New } from "../pieces";
export function Login_Forms() {
  const { form }: { form: string } = useParams();
  if (form == "singIn") return <Login />;
  if (form == "new") return <New />;
  return <></>
}
