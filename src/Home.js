import React from "react";
import HeroSection from "./Components/HeroSection";
import Services from "./Components/Services";
import Footer from "./Components/Footer";
import TrustBrand from "./Components/TrustBrand";
const Home = () => {
  return( 
  <div className="max-w-[1440px]">
    <HeroSection/>
    <Services/>
    <TrustBrand/>
   
  </div>
  );
};

export default Home;
