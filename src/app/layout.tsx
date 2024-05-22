import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Connect and Succeed: Real-Time Solutions at right time.",
  description:
    "Join a community of 1 billion members to manage your professional identity and network. Connect in real time with live chat and calls to find quick solutions to any problem. Access knowledge, insights, and opportunities to help you succeed.",
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
