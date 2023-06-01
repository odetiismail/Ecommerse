import React from "react";
import Search from "./Search";
import Category from "./Category";
import ColorFilter from "./ColorFilter";
import CompanyFilter from "./CompanyFilter";
import InputRange from "./inputRange";
const FilterSection = () => {
  return (
    <div>
      <Search />
      <Category />
      <CompanyFilter/>
       <ColorFilter/>
       <InputRange/>
    </div>
  );
};

export default FilterSection;
