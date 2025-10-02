import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Providers from "./providers";
import { cn } from "@/lib/utils";
import Backgroud from "@/components/backgroud";
import { NextIntlClientProvider } from "next-intl";
import { getMessages } from "next-intl/server";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Investment AI",
  description: "Investment AI",
};

export default async function RootLayout({
  children,
  params,
}: Readonly<{
  children: React.ReactNode;
  params: Promise<{ lng: string }>;
}>) {
  const messages = await getMessages();
  const { lng } = await params;

  return (
    <html lang={lng}>
      <body
        className={cn(
          geistSans.variable,
          geistMono.variable,
          "antialiased",
          "relative min-h-screen min-w-screen",
          "bg-[radial-gradient(ellipse_at_top,var(--color-blue-light),var(--color-blue-mid)_40%,var(--color-blue-darkest)_100%)]"
        )}
      >
        <Backgroud />
        <NextIntlClientProvider locale={lng} messages={messages} timeZone="UTC">
          <Providers>{children}</Providers>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
