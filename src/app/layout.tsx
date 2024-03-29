import Footer from "@/components/Footer/Footer";
import Nav from "@/components/Nav/Nav";
import "./globals.css";
import { roboto } from "./fonts";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={roboto.className}>
      {/*
        <head /> will contain the components returned by the nearest parent
        head.tsx. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
      <head />
      <body>
        <Nav />

        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
