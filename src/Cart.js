import React from "react";

import { useSelector } from "react-redux";

import CartItems from "./Components/CartItems";
const Cart = () => {
  const currData = useSelector((curr) => curr.counter.cart);
 
  return (
    <div className="w=[100%]">
      <div className="pt-10 w-[90%] m-auto">
        <div className="grid  grid-cols-5 text-center">
          <p>Item</p>
          <p>Price</p>
          <p>Quality</p>
          <p>SubTotal</p>
          <p>Remove</p>
        </div>
        <hr className="bg-gray-700 mt-5 h-1" />

        <div className="m-1">
          {currData.map((curr) => {
            return <CartItems key={curr.id} {...curr}/>
          }
          )}
        </div>
      </div>
    </div>
  );
  
  
};

export default Cart;
