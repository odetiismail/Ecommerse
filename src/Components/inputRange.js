import React from "react";
import { useSelector, useDispatch } from "react-redux";
import FormatePrice from "./FormatePrice";
import { PriceFilter } from "../reducer/Slice";
//import FormatePrice from "./FormatePrice";
const InputRange = () => {
  const da = useSelector((curr) => curr.counter.filters);
 const {Price,maxPrice,minPrice}=da
  console.log(da.maxPrice)
  const dispatch = useDispatch();

  const setPrice = (e) => {
    let name = e.target.name;
    let value = e.target.value;
    const pr = { [name]: value };
    dispatch(PriceFilter(pr));
    //console.log(pr);
  };

  return (
    <div>
      <label className="block mt-4  text-md font-medium text-gray-900 dark:text-white">
        Price Range
      </label>
      <p>
        <FormatePrice price={Price} />
      </p>
      {maxPrice===undefined?null:<input
      id="volume"
        name="Price"
        type="range"
        value={Price}
        min={minPrice}
        max={maxPrice}
        onChange={setPrice}
      />}
    </div>
  );
};

export default InputRange;
