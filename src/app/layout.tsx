import { Header } from "@/components";
import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Todo List - Next.JS + Nrst.JS + Postgress + TypeOrm + Docker",
  description: "Todo List - Next.JS + Nrst.JS + Postgress + TypeOrm + Docker",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru">
      <body>
        <Header />
        {children}
      </body>
    </html>
  );
}
