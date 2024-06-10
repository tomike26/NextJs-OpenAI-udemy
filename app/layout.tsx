import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar"

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Next Js Tutorial",
  description: "Build awesome stuff with Next Js",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>    
           <Navbar/>
           <main className="px-8">
           {children}
           </main>
        </body>
    </html>
  );
}
