import { redirect } from "next/navigation";

type PageProps = { params: { lng: string } };

export default function Home({ params }: PageProps) {
  // Default to Request page within the current locale
  redirect(`/${params.lng}/feature/request`);
}
