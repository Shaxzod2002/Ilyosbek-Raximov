import React from "react";
import Navbar from "../Navbar";
import About from "../pages/About";
import Business from "../pages/Business";
import Footer from "../pages/Footer";
import Gallery from "../pages/Gallery";
import Header from "../pages/Header";

export default function Home() {
  return (
    <div>
      <Navbar />
      <Header />
      <About />
      <Gallery />
      <Business />
      <Footer />
    </div>
  );
}
