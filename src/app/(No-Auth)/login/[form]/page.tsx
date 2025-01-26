import { Login_Forms } from "../../../../components/pages";
import "../../../globals.css";
export default async function Login({ params }) {
  const { form } = await params;
  return <Login_Forms form={form} />;
}
