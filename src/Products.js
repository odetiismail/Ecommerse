import React from "react";
import Sort from "./Components/Sort";
import FilterSection from "./Components/FilterSection";

const Products = () => {
  return (
    <div className="w-[100%] p-5 grid md:grid-cols-4 grid-cols-1">
      <div className="col-span-1">
        <FilterSection />
      </div>
      <div className="p-2 md:col-span-3">
        <Sort />
      </div>
    </div>
  );
};

export default Products;
