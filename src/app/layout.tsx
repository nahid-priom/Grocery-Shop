"use client";
import HeaderTop from "@/components/HeaderTop";
import "./globals.css";
import { Inter } from "next/font/google";
import HeaderMain from "@/components/HeaderMain";
import Navbar from "@/components/Navbar";
const inter = Inter({ subsets: ["latin"] });
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import MobNavbar from "@/components/MobNavbar";
import Footer from "@/components/Footer";
import { RecoilRoot } from "recoil";


export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <RecoilRoot>
          <HeaderTop />
          <HeaderMain />
          <Navbar />
          <MobNavbar />
          {children}
          <Footer />
        </RecoilRoot>
      </body>
    </html>
  );
}
