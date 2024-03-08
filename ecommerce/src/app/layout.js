
import { Inter } from "next/font/google";
import "./globals.css";
import Footer from "@/components/Footer/page";
import Banner from "@/components/Banner/page";
import Slider from "@/components/Slider/page";
import Carousel from "@/components/Carousel/page";
import Slider2 from "@/components/Slider2/page";
import Home from "./homepage/page";
import HomePage from "./homepage/page";
import NavSection from "./navigation/page";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({ children }) {
  return (
    <html lang="en" data-theme='light'>
      <body className={inter.className}>
      <NavSection/>
        {children}
       
      </body>
    </html>
  );
}
