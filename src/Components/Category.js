import React from "react";
import { useSelector } from "react-redux";

const Category = () => {
  const data = useSelector((da) => da.counter.products);

  //console.log(data);
  const Ismail = (da) => {
    const ca = da.map((a, b) => a.company);
    const n = ['All',...new Set(ca)];
    return n;
  };

  const Cate = Ismail(data);

 
  return (
    <div>
      <div>
        <h1>Category</h1>
      </div>
    </div>
  );
};

export default Category;
