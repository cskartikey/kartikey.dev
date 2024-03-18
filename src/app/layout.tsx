import type { Metadata } from "next";
import { Playfair_Display } from "next/font/google";
import { Poppins } from "next/font/google";
import { Inter } from "next/font/google";
import "./globals.css";
import Footer from "./footer";
import Header from "./nav";
import localFont from "next/font/local";

const pricedown = localFont({
  src: "../../public/pricedown.otf",
  variable: "--font-pricedown",
});
const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const playfairDisplay = Playfair_Display({
  subsets: ["latin", "latin-ext"],
  variable: "--font-playfair",
});
const poppins = Poppins({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800"],
  variable: "--font-poppins",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${playfairDisplay.variable} ${poppins.variable} ${inter.variable} ${pricedown.variable}`}
      >
        {/* <Header /> */}
        {children}
        <Footer />
      </body>
    </html>
  );
}
