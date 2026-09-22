import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./styles/globals.css";
import Header from "./components/header";
import Footer from "./components/footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Xavier MANTELLATO",
  description: "Site développé en Next.JS et créer avec soin par Xavier MANTELLATO, développeur indépendant, afin de proposer son portfolio et ses liens de contacts.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="bg-[#F1F4EE]">
        <Header/>
        {children}
        <div className="min-h-full" id="modal-root"></div>
        <Footer/>
      </body>
    </html>
  );
}
