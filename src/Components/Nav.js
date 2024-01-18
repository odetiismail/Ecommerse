import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { AiOutlineMenu, AiOutlineClose,} from "react-icons/ai";
import {TiShoppingCart}from 'react-icons/ti'
const Nav = () => {
  const [icon, setIcon] = useState(true);

  const Change = (e) => {
    console.log(e);
    setIcon(e);
    //alert('')
  };

  return (
    <div className="max-w-[1440px] bg-[#F6F8FA] h-auto  p-4 flex justify-between items-center">
      <div className="">
        <NavLink to="/">
          <img src="./images/Ismail.png" alt="/" className="max-w-[70%] md:max-w-[100%]" />
        </NavLink>
      </div>
      <div className="hidden md:flex">
        <ul className="flex">
          <li className="p-4 text-2xl hover:text-bold hover:font-medium hover:text-blue-400 border-b hover:border-black">
            <NavLink to="/">Home</NavLink>
          </li>
          <li className="p-4 text-2xl hover:text-bold hover:font-medium hover:text-blue-400 border-b hover:border-black">
            <NavLink to="/about">About</NavLink>
          </li>
          <li className="p-4 text-2xl hover:text-bold hover:font-medium hover:text-blue-400 border-b hover:border-black">
            <NavLink to="/products">Products</NavLink>
          </li>
          <li className="p-4 text-2xl hover:text-bold hover:font-medium hover:text-blue-400 border-b hover:border-black">
            <NavLink to="/contact">Contact</NavLink>
          </li>
          <li className="p-4 text-2xl hover:text-bold hover:font-medium hover:text-blue-400 border-b hover:border-black">
            <NavLink to="/cart"><TiShoppingCart size={35}/></NavLink>
          </li>
        </ul>
      </div>
      <div className=" flex fixed right-[40px] top-[20px] sticky md:hidden">
        {icon ? (
          <AiOutlineMenu size={35} onClick={() => Change(false)} />
        ) : null}
      </div>
      <div
        className={
          icon
            ? "hidden"
            : "fixed md:hidden  w-[100%] left-0 top-0 bg-[#F6F8FA] h-screen text-center text-2xl z-[1]"
        }>
        <div className=" flex fixed right-[40px] top-[30px]">
          {icon ? null : (
            <AiOutlineClose size={30} onClick={() => Change(true)} />
          )}
        </div>
        <ul className="pt-20">
          <li className="py-4 border-b border-gray-300" onClick={() => Change(true)}>
            <NavLink to="/">Home</NavLink>
          </li>
          <li className="py-4 border-b border-gray-300" onClick={() => Change(true)}>
            <NavLink to="/about">About</NavLink>
          </li>
          <li className="py-4 border-b border-gray-300" onClick={() => Change(true)}>
            <NavLink to="/products">Products</NavLink>
          </li>
          <li className="py-4 border-b border-gray-300" onClick={() => Change(true)}>
            <NavLink to="/contact">Contact</NavLink>
          </li>
          <li className="py-4 border-b border-gray-300 m-auto" onClick={() => Change(true)}>
            <NavLink to="/cart"><TiShoppingCart size={35} className='m-auto'/></NavLink>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Nav;
