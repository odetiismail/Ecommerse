import React from "react";
import { AiOutlinePlus, AiOutlineMinus } from "react-icons/ai";
import { NavLink } from "react-router-dom";
const CartAmountToggle = ({ amount, setIncrement, setDecrement }) => {
  return (
    <div>
      <div className="flex p-5 w-36 justify-between">
        <AiOutlineMinus className="text-2xl cursor-pointer " onClick={()=>{setDecrement()}} />
        <span className="text-xl">{amount}</span>
        <AiOutlinePlus className="text-2xl cursor-pointer" onClick={() => setIncrement()} />
      </div>
      <div>
       <NavLink to='/cart'>
       <button className="bg-blue-600  hover:bg-white hover:text-black text-white font-semibold py-2 px-4 border border-gray-400 rounded shadow">
          Add To Cart
        </button>
       </NavLink>
      </div>
    </div>
  );
};

export default CartAmountToggle;
