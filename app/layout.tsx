import type { Metadata } from "next";
import { Roboto, Poppins } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";
import NavBar from "./Components/NavBar";
import Footer from "./Components/Footer";
import Container from "./Components/Container";
import { IoPaw } from "react-icons/io5";
import { Toaster } from "sonner";

export const metadata: Metadata = {
  title: "Amigo de pata",
  description: "Aqui você encontrará suporte com incriveis amigos de patas",
  icons: [
    {
      url: "./paw-icon.svg",
    },
  ],
};

const poetsenOne = localFont({
  src: "./fonts/PoetsenOne-Regular.ttf",
  variable: "--font-PoetsenOne",
  weight: "500",
});

const roboto = Roboto({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-roboto",
  weight: ["100", "300", "400", "500", "700"],
});
const poppins = Poppins({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-poppins",
  weight: ["100", "300", "400", "500", "700"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={` ${poetsenOne.variable} ${roboto.variable} ${poppins.variable}`}
      >
        <NavBar />
        {children}
        <Toaster richColors position="top-center" />
        <Footer />
      </body>
    </html>
  );
}
