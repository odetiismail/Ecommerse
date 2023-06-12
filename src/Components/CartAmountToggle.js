import React from "react";
import { AiOutlinePlus, AiOutlineMinus } from "react-icons/ai";


const CartAmountToggle = ({ amount, setIncrement, setDecrement,data }) => {

//  const da=data
// const dispatch=useDispatch()
 
//  const setCartAdd=(curr)=>{
//    dispatch(addCart(curr))
//  }
  return (
    <div>
      <div className="flex p-5 w-36 justify-between">
        <AiOutlineMinus
          className="text-2xl cursor-pointer "
          onClick={() => {
            setDecrement();
          }}
        />
        <span className="text-xl">{amount}</span>
        <AiOutlinePlus
          className="text-2xl cursor-pointer"
          onClick={() => setIncrement()}
        />
      </div>
     
    </div>
  );
};

export default CartAmountToggle;
