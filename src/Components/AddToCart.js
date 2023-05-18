import React, { useState } from "react";

import { TiTick } from "react-icons/ti";
import CartAmountToggle from "./CartAmountToggle";
//import { AiOutlinePlus, AiOutlineMinus } from "react-icons/ai";
const AddToCart = ({ data }) => {
  const { colors, stock } = data;

  const [color, setColor] = useState(0);
  const [amount, setAmount] = useState(1);
  const setIncrement = () => {
    amount < stock ? setAmount(amount + 1) : setAmount(stock);
  };

  const setDecrement = () => {
    amount > 1 ? setAmount(amount - 1) : setAmount(1);
  };
  // const [add, setAdd] = useState(1);

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
      <div className="flex">
        <p className="pt-1.5">Color:</p>
        <p>
          {colors &&
            colors.map((cur, index) => {
             // console.log(cur);
              return (
                <button
                  key={index}
                  style={{ backgroundColor: cur }}
                  className=" rounded-3xl p-3 m-1 md:m-2 relative "
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
        </p>

        {/*Add To Cart */}
        {/* <div className="flex p-5 w-36 justify-between">
        <AiOutlineMinus className="text-2xl" onClick={() => setAdd(add - 1)} />
        <span className="text-xl">{add}</span>
        <AiOutlinePlus className="text-2xl" onClick={() => setAdd(add + 1)} />
      </div>
      <div>
        <button className="bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow">
          Add To Cart
        </button>
      </div> */}
      </div>
      <CartAmountToggle
        amount={amount}
        setIncrement={setIncrement}
        setDecrement={setDecrement}
      />
    </div>
  );
};

export default AddToCart;
