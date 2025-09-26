import { redirect } from "next/navigation";

export default function Home() {
  redirect("/feature/request");

  // TODO: check if user is logged in
  redirect("/login");
}
