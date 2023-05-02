import React from "react";
import { NavLink } from "react-router-dom";

const Product = (curr) => {
  const { id, name, company, price, image } = curr;

  return (
    <NavLink to={`/singleProduct/${id}`}>
      <div className="p-2 relative  overflow-hidden bg-cover bg-no-repeat m-auto bg-white ">
        <img
          src={image}
          className="max-w-xs transition duration-200  hover:scale-110 m-auto "
          alt="Louvre"
        />

        <div className=" flex justify-between text-lg pt-3">
          <p>{name}</p>
          <p className="text-blue-600">$ {price}</p>
        </div>
      </div>
    </NavLink>
  );
};

export default Product;
