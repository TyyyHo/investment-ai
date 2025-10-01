import { redirect } from "next/navigation";

export default function Home() {
  // Default to Request page within the current locale
  redirect("/login");
}
