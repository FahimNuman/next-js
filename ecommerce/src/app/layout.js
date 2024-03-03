
import { Inter } from "next/font/google";
import "./globals.css";

import Navbar from "@/components/Navbar/page";
import Footer from "@/components/Footer/page";
import ShortBanner from "@/components/ShortBanner/page";
import Banner from "@/components/Banner/page";
import Slider from "@/components/Slider/page";
import Carousel from "@/components/Carousel/page";
import BottomNav from "@/components/BottomNav/page";
import NavDropDown from "@/components/NavDropDown/page";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({ children }) {
  return (
    <html lang="en" data-theme='light'>
      <body className={inter.className}>

        <ShortBanner/>
        <Navbar/>
        <BottomNav/>
        <NavDropDown/>
        <Carousel/>
        <>
        <Banner/>
        <Slider/>
        </>
        {children}
        <Footer/>
      </body>
    </html>
  );
}
