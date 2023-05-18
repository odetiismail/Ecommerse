import React, { useState } from "react";

import { TiTick } from "react-icons/ti";
import { AiOutlinePlus, AiOutlineMinus } from "react-icons/ai";
const Color = ({ colors = [] }) => {
  const [color, setColor] = useState(0);
  const [add, setAdd] = useState(1);

  //console.log(color);

  //    const col=colors;
  //    //console.log(col)
  //     const  name =['a','b','c']
  //     const toggle={}

  //     name.forEach((curr,index)=>{
  //         toggle[curr]=col[index]
  //     })
  //    // console.log(toggle)

  return (
    <div>
      {colors.map((cur, index) => {
        return (
          <button
            key={index}
            style={{ backgroundColor: cur }}
            className=" rounded-3xl p-3 m-1 md:m-2 relative"
            onClick={() => setColor(index)}
          >
            {index === color ? (
              <TiTick
                className=" absolute top-0 right-2 left-0 text-white"
                size="25px"
              />
            ) : null}
          </button>
        );
      })}

      <div className="flex p-5 w-36 justify-between">
        <AiOutlineMinus className="text-2xl" onClick={() => setAdd(add - 1)} />
        <span className="text-xl">{add}</span>
        <AiOutlinePlus className="text-2xl" onClick={() => setAdd(add + 1)} />
      </div>
      <div>
        <button className="bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow">
          Add To Cart
        </button>
      </div>
    </div>
  );
};

export default Color;
