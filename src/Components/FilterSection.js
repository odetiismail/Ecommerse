import React from "react";
import Search from "./Search";
import Category from "./Category";
import CompanyFilter from "./CompanyFilter";

const FilterSection = () => {
  return (
    <div>
      <Search />
      <Category />
      <CompanyFilter/>
    </div>
  );
};

export default FilterSection;
