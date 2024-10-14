import type { Metadata } from "next";
import { Roboto, Poppins } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";
import NavBar from "./Components/NavBar";

export const metadata: Metadata = {
  title: "Amigo de pata",
  description: "Aqui você encontrará suporte com incriveis amigos de patas",
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
      </body>
    </html>
  );
}
