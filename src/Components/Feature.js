import React from "react";
import { useSelector } from "react-redux";
import Product from "./Product";
export const Feature = () => {
  const getDa = useSelector((curr) => curr.counter.featureProducts);
 if(getDa.length){
  return (
    <div className="p-5 bg-gray-100">
      <h2 className=" uppercase text-blue-600">Check Now !</h2>
      <p className="uppercase md:text-2xl text-xl font-bold">
        Our Feature Services
      </p>

      <div className="flex flex-wrap justify-around gap-3">
        {getDa.map((curr) => {
          return <Product key={curr.id} {...curr} />;
        })}
      </div>
    </div>
  );
 }
 else{
  return(
    <div>Loading . . . . . .</div>
  )
 }
 
};
