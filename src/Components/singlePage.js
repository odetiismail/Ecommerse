import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import MyImage from "./MyImage";
import { NavLink } from "react-router-dom";
import Star from "./Star";
import FormatePrice from "./FormatePrice";
import { TbTruckDelivery, TbReplaceFilled } from "react-icons/tb";
import { FaUserShield } from "react-icons/fa";
import AddToCart from "./AddToCart";

const SinglePage = () => {
  const [data, setData] = useState([]);
  const urlData = useParams();
  useEffect(() => {
    getData(Api);
  }, []);

  const Api = `https://api.pujakaitem.com/api/products?id=${urlData.id}`;

  const getData = async (a) => {
    const da = await axios.get(a);
    setData(da.data);
  };

  const { id, name, company, price, image, stars, description, reviews,colors } = data;

  //console.log(data);

  return (
    <div className="">
      <div className="text-md md:text-2xl text-blue-500 bg-[#F6F8FA] ">
        <NavLink to="/" className="font-bold">
          Home
        </NavLink>
        /<span className="text-black md:text-2xl">{name}</span>
      </div>
      <div className="grid md:grid-cols-2 grid-col-1 p-5 text-lg">
        <div>
          <MyImage imgs={image} />
        </div>
        <div className="grid gap-5 p-5">
          <p className="md:text-3xl text-2xl" >{name}</p>
          <Star stars={stars} reviews={reviews} />
          <p className="font-bold">
            MRP:
            <del className=" inline-block ">
               <FormatePrice price={price + 250000} />
            </del>
          </p>
          <p className="text-sm md:text-[18px]">{description}</p>
          <div className="flex justify-around border-b-2 border-emerald-400">
            <div>
              <div className="bg-gray-200 w-11 m-auto flex rounded-3xl justify-center ">
                <TbTruckDelivery size="30px" className="" />
              </div>
              <p className="text-sm md:text-md pt-2 text-center ">Free Delivery</p>
            </div>
            <div>
              <div className="bg-gray-200 w-11 m-auto flex rounded-3xl justify-center">
                <TbReplaceFilled size="30px" />
              </div>
              <p className="text-sm md:text-md pt-2 text-center ">30 Days Replacement</p>
            </div>
            <div>
              <div className="bg-gray-200 w-11 m-auto flex rounded-3xl justify-center">
                <TbTruckDelivery size="30px" />
              </div>
              <p className="text-sm md:text-md pt-2 text-center ">Ismail Delivery</p>
            </div>
            <div>
              <div className="bg-gray-200 w-11 m-auto flex rounded-3xl justify-center">
                <FaUserShield size="30px" />
              </div>
              <p className="text-sm md:text-md pt-2 text-center ">2 years Warranty</p>
            </div>
          </div>
          <div className="border-b-2 border-black p-2 md:p-5">
          <p>Brand : <span className="font-bold">{company}</span></p>
          
          <p>ID : <span className="font-bold">{id}</span></p>
          </div>
          <div>
          <AddToCart data={data} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SinglePage;
