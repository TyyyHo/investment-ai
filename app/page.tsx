import { redirect } from "next/navigation";

export default function Home() {
  redirect("/request");

  // TODO: check if user is logged in
  redirect("/login");
}
