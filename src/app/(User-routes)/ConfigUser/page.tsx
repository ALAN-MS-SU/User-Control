import { getServerSession } from "next-auth";
<<<<<<< HEAD
import { authOptions } from "../../auth";
=======
import { authOptions } from "../../../model";
>>>>>>> refs/remotes/origin/main
import { ConfigUser } from "../../../components/pages/";
import { User } from "../../../model";
export default async function Config() {
  const session = await getServerSession(authOptions)
  const {ID,Email,Name} = session.user as User
  return <ConfigUser ID={ID} Email={Email} Name={Name} />;
}
