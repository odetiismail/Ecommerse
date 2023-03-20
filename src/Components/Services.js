import React from "react";
import { ImTruck } from "react-icons/im";
import { GiCheckedShield,GiReceiveMoney } from "react-icons/gi";
import {RiSecurePaymentLine} from 'react-icons/ri'
const Services = () => {
  return (
    <div className="grid md:grid-cols-3 gap-4 md:p-6 p-6">
      <div className="bg-gray-100 text-center p-6 md:p-10 rounded-3xl">
        <div className="rounded-full w-[60px] md:w-[80px] md:p-6 p-2 bg-white m-auto">
          <ImTruck size={30} className="m-auto text-blue-500" />
        </div>
        <p className="text-xl p-4">Super Fast And Free Delivery</p>
      </div>
      <div className="">
        <div className="bg-gray-100 flex rounded-3xl gap-2 justify-center p-4">
          <div className="rounded-full md:w-[80px] md:p-6 p-2 bg-white">
            <GiCheckedShield size={30} className="text-blue-500" />
          </div>
          <p className="text-xl p-4">Super Fast And Free Delivery</p>
        </div>
        <div className="bg-gray-100 flex rounded-3xl gap-2 justify-center p-4 mt-4 md:mt-8">
          <div className="rounded-full md:w-[80px] md:p-6 p-2 bg-white">
            <GiReceiveMoney size={30} className="text-blue-500" />
          </div>
          <p className="text-xl p-4">Super Fast And Free Delivery</p>
        </div>
      </div>
      <div className="bg-gray-100 text-center p-6 md:p-10 rounded-3xl">
        <div className="rounded-full w-[60px] md:w-[80px] md:p-6 p-2 bg-white m-auto">
          <RiSecurePaymentLine size={30} className="m-auto text-blue-500" />
        </div>
        <p className="text-xl p-4">Super Fast And Free Delivery</p>
      </div>
    </div>
  );
};

export default Services;
