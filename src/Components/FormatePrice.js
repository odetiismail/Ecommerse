//import React from "react";

const FormatePrice = ({ price }) => {
  return Intl.NumberFormat("en-IN", {
    maximumFractionDigits: 2,
    style: "currency",
    currency: "INR",
  }).format(price / 100);
  // console.log(inPri)
  
};

export default FormatePrice;
