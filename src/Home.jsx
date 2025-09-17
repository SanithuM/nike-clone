import React from "react";
import Navbar from "./Components/Navbar";
import Hero from "./Components/Hero";
import PromoSection from "./Components/Promo";
import CardRow from "./Components/Cards";
import Shoes from "./Components/Shoes";
import Footer from "./Components/Footer";

function Home() {
  return (
    <div className="font-sans">
      <Navbar />
      <Hero />
      <PromoSection />
      <CardRow />
      <Shoes />
      <Footer />
    </div>
    
  );
}

export default Home;