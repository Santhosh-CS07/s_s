import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Homenavbar from "@/components/HomeNavBar/Homenavbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Support from Real People.",
  description:
    "we are here to connect you in real time to ask questions and solve your real problems.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-gradient-to-r from-green-400 to-blue-500`}>
        <Homenavbar />
        {children}
      </body>
    </html>
  );
}
