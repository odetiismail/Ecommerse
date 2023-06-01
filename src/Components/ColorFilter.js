import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { ColorFil } from "../reducer/Slice";
const ColorFilter = () => {
  const da = useSelector((curr) => curr.counter.products);
  const dispatch = useDispatch();

  const Col = (curr) => {
    const col = curr.map((cur) => {
      return cur.colors;
    });

    const Arr = [];
    const Co = Arr.concat(...col);
    const C = [...new Set(Co)];

    return C;
  };  

  const Color = Col(da);

  const setColor = (e) => {
  dispatch(ColorFil(e))
  };
  return (
    <div>
      <label
        for="countries"
        className="block m-auto mb-2 md:mt-4 text-md font-medium text-gray-900 dark:text-white"
      >
        Color
      </label>
      <div className="flex">
        {Color.map((curr, index) => {
          return (
            <div key={index}>
              <button
                key={index}
                style={{ backgroundColor: curr }}
                className=" rounded-3xl p-3 m-1 md:m-2 relative "
                onClick={() => setColor(curr)}
              ></button>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ColorFilter;
