import React from "react";
import CartAmountToggle from "./CartAmountToggle";
import FormatePrice from "./FormatePrice";
import { AiFillDelete } from "react-icons/ai";
const CartItems = ({ id, amount, color, image, name, price, max }) => {
  // const [amount, setAmount] = useState(1);
  const setIncrement = () => {
    // amount < stock ? setAmount(amount + 1) : setAmount(stock);
  };

  const setDecrement = () => {
    // amount > 1 ? setAmount(amount - 1) : setAmount(1);
  };

  return (
    <div className="grid  grid-cols-5 text-center">
      <div className="flex">
        <div>
          <img src={image} className="w-[80px]" alt={id} />
        </div>
        <div>
          <p>{name}</p>
          <div className="grid grid-cols-2 text-center">
            <p className="text-lg">color:</p>
            <p>
              <button
                style={{ backgroundColor: color, color: color }}
                className=" rounded-3xl p-2 m-2"
              ></button>
            </p>
          </div>
        </div>
      </div>
      <p>
        <FormatePrice price={price} />
      </p>
      <div>
        <CartAmountToggle
          amount={amount}
          setIncrement={setIncrement}
          setDecrement={setDecrement}
        />
      </div>
      <p>SubTotal</p>
      <div>
        <button>
          <AiFillDelete size={20} className=" text-orange-600 cursor-pointer" />
        </button>
      </div>
    </div>
  );
};

export default CartItems;
