import type { Metadata } from "next";
import { Outfit } from "next/font/google";
import "../styles/globals.css";
import Header from "../components/Header";

const outfit = Outfit({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "App todo usando Next.js",
  description: "Organize suas tarefas de um modo fácil",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={outfit.className}>
        <>
          <Header />
          {children}
        </>
      </body>
    </html>
  );
}
