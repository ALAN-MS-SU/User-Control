import { getServerSession } from "next-auth";
import { authOptions } from "../../../model";
import { ConfigUser } from "../../../components/pages/";
import { User } from "../../../model";
export default async function Config() {
  const session = await getServerSession(authOptions)
  const {ID,Email,Name} = session.user as User
  return <ConfigUser ID={ID} Email={Email} Name={Name} />;
}
