import type { Metadata } from "next";
import "./globals.css";

import { Exo } from "next/font/google";
const inter = Exo({ subsets: ["latin"], weight:["200","300","400","500","600","800","900"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
