"use server"
import { EditUser } from "../../../..//components/pages";
export default async function EditPosition({ params }) {
  const { ID } = await params;
  return <EditUser ID={ID} />;
}
