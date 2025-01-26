import { ConfigForm } from "../pieces";
import { User } from "../../model";
export async function ConfigUser({
  Name,
  Email,
  ID,
}: Pick<User, "Email" | "Name" | "ID">) {
  return <ConfigForm Name={Name} Email={Email} ID={ID} />;
}
