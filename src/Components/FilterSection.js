import React from "react";
import Search from "./Search";
import Category from "./Category";
import ColorFilter from "./ColorFilter";
import CompanyFilter from "./CompanyFilter";

const FilterSection = () => {
  return (
    <div>
      <Search />
      <Category />
      <CompanyFilter/>
       <ColorFilter/>
    </div>
  );
};

export default FilterSection;
