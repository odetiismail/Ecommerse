import React from "react";
import HeroSection from "./Components/HeroSection";
import Services from "./Components/Services";
const Home = () => {
  return( 
  <div className="max-w-[1440px]">
    <HeroSection/>
    <Services/>
  </div>
  );
};

export default Home;
