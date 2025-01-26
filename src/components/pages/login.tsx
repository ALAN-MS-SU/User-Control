"use server"
import { Login, New } from "../pieces";
export async function Login_Forms({form}:{form:string}) {
  if (form == "signIn") return <Login />;
  if (form == "new") return <New />;
  return <></>
}
