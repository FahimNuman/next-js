
import { Inter } from "next/font/google";
import "./globals.css";

import Navbar from "./components/Navbar/page";
import SearchBar from "./components/SearchBar/page";
import Footer from "./components/Footer/page";
import ShortBanner from "./components/ShortBanner/page";
import Banner from "./components/Banner/page";
import Slider from "./components/Slider/page";
import Carousel from "./components/Carousel/page";
import Product from "./components/Product/page";


const inter = Inter({ subsets: ["latin"] });



export default function RootLayout({ children }) {
  return (
    <html lang="en" className="p-6">
      <body className={inter.className}>
        <ShortBanner/>
        <Navbar/>
        <SearchBar/>
        <Carousel/>
        <Banner/>
        <Product/>
        {children}
        <Footer/>
      </body>
    </html>
  );
}
