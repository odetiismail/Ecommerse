import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import MyImage from "./MyImage";
import { NavLink } from "react-router-dom";
import Star from "./Star";
import FormatePrice from "./FormatePrice";
import { TbTruckDelivery,TbReplaceFilled } from "react-icons/tb";
import {FaUserShield} from 'react-icons/fa'
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

  const { id, name, company, price, image, stars, description, reviews } = data;

  //console.log(data);

  return (
    <div className="">
      <div className="text-2xl text-blue-500 bg-[#F6F8FA] ">
        <NavLink to="/" className="font-bold">
          Home
        </NavLink>
        /<span className="text-black">{name}</span>
      </div>
      <div className="grid md:grid-cols-2 grid-col-1 gap-10 p-5">
        <div>
          <MyImage imgs={image} />
        </div>
        <div>
          <p className="text-3xl">{name}</p>
          <Star />
          <p className="">
            MRP:
            <del className=" inline-block">
              <FormatePrice price={price + 250000} />
            </del>
          </p>
          <p>{description}</p>
          <div className="flex justify-around ">
            <div className="">
              <div className="bg-gray-200 w-11 m-auto flex rounded-3xl justify-center ">
                <TbTruckDelivery size="40px" className=""/>
              </div>
              <p>Free Delivery</p>
            </div>
            <div className="">
              <div className="bg-gray-200 bg-gray-200 w-11 m-auto flex rounded-3xl justify-center">
                <TbReplaceFilled size="40px" />
              </div>
              <p>30 Days Replacement</p>
            </div>
            <div className="">
              <div className="bg-gray-200 bg-gray-200 w-11 m-auto flex rounded-3xl justify-center">
                <TbTruckDelivery size="40px" />
              </div>
              <p>Ismail Delivery</p>
            </div>
            <div className="">
              <div className="bg-gray-200 bg-gray-200 w-11 m-auto flex rounded-3xl justify-center">
                <FaUserShield size="40px" />
              </div>
              <p>2 years Warranty</p>
            </div>
          </div>
          <p>Brand : {company}</p>
          <p>ID : {id}</p>
        </div>
      </div>
    </div>
  );
};

export default SinglePage;
