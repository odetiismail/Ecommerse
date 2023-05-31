import React from "react";
import { useSelector } from "react-redux";
import { categoryFilter } from "../reducer/Slice";
import { useDispatch } from "react-redux";
const Category = () => {
  const data = useSelector((da) => da.counter.products);
  const dispatch = useDispatch();
  const categoryFil = (curr) => {
    dispatch(categoryFilter(curr));
  };
  //console.log(data);
  const Cate = (da) => {
    const ca = da.map((a) => a.category);
    const n = ["All", ...new Set(ca)];
    return n;
  };

  const Catego = Cate(data);

  //console.log(Cate);
  return (
    <div >
      <div className="m-auto">
        <p className="text-md">Category</p>
      </div>
      {Catego.map((a, b) => {
        return (
          <div
            key={b}
            onClick={() => categoryFil(a)}
            className="md:text-[16px] text-sm font-sans md:p-1 hover:bg-slate-100 m-auto capitalize border-b-2 hover:text-blue-800  w-[60%]"
          >
            {a}
          </div>
        );
      })}
    </div>
  );
};

export default Category;
