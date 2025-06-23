import type { Metadata } from "next";
import "./globals.css";
import { Header } from "./components/header/Header";

export const metadata: Metadata = {
  title: "Dự án test frontend",
  description: "Mô tả trang dự án test frontend",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Header />

        {children}


      </body>
    </html>
  );
}
