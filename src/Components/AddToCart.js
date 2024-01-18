import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { TiTick } from "react-icons/ti";
import CartAmountToggle from "./CartAmountToggle";
import { addCart } from "../reducer/Slice";
import { useDispatch } from "react-redux";

const AddToCart = ({ data }) => {
  const { colors, stock } = data;

  const dispatch = useDispatch();

  //console.log(data);
  const [color, setColor] = useState(colors[0]);
  const [amount, setAmount] = useState(1);

  const setIncrement = () => {
    amount < stock ? setAmount(amount + 1) : setAmount(stock);
  };

  const setDecrement = () => {
    amount > 1 ? setAmount(amount - 1) : setAmount(1);
  };

  // const upData = () => {
  //   let upColor = color;
  //   let upAmount = amount;

  //   return {
  //     ...data,
  //     colors: upColor,
  //     tAmount: upAmount,
  //   };
  // };
  // const mod = upData();

  //Adding array to state of Cart
  // const setCartAdd = () => {
    
  // };

  return (
    <div>
      <div className="flex">
        <p className="pt-1.5">Color:</p>
        <p>
          {colors &&
            colors.map((cur, index) => {
              console.log(cur);
              return (
                <button
                  key={index}
                  style={{ backgroundColor: cur }}
                  className=" rounded-3xl p-3 m-1 md:m-2 relative "
                  onClick={() => setColor(cur)}
                >
                  {color === cur ? (
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

      <div>
        <NavLink 
        to="/cart"
        onClick={() => {
          dispatch(addCart({data,color,amount}));
         }}
        >
          <button className="bg-blue-600  hover:bg-white hover:text-black text-white font-semibold py-2 px-4 border border-gray-400 rounded shadow">
            Add To Cart
          </button>
        </NavLink>
      </div>
    </div>
  );
};

export default AddToCart;
