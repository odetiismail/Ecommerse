import React, { useEffect } from "react";
import HeroSection from "./Components/HeroSection";
import Services from "./Components/Services";
import TrustBrand from "./Components/TrustBrand";
import { Feature } from "./Components/Feature";
const Home = () => {

  
  return( 
  <div className="max-w-[1440px]">
    <HeroSection/>
   <Feature/>
    <Services/>
    <TrustBrand/>
  </div>
  );
};

export default Home;
