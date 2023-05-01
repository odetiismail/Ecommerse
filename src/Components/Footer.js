import React from "react";
import { SiRiotgames, SiInstagram, SiYoutube } from "react-icons/si";

const Footer = () => {
  return (
    <div className="bg-[#0a1435]">
      <div className="max-w-[1440px] grid grid-cols-1 md:grid-cols-5 text-white p-6 gap-5">
        <div>
          <h2 className="text-2xl">Ismail Technical</h2>

          <p className="md:pt-5 pt-5 ">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit.
          </p>
        </div>
        <div className="md:col-span-2  ">
          <h2 className="text-2xl">Subscribe to get important updates</h2>
          <form className="w-full max-w-sm p-5">
            <div className="flex items-center border-b border-white py-4">
              <input
                className="appearance-none bg-transparent border-none w-full text-white-700 mr-3 py-1                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       px-2 leading-tight focus:outline-none"
                type="text"
                placeholder="Enter Your Email"
                aria-label="Full name"
              />
              <button
                className="flex-shrink-0 bg-blue-500 hover:bg-teal-700 border-blue-500 hover:border-teal-700 text-sm border-4 text-white py-1 px-2 rounded"
                type="button"
              >
                Sign Up
              </button>
              <button
                className="flex-shrink-0 border-transparent border-4 text-blue-500 hover:text-blue-500 text-sm py-1 px-2 rounded"
                type="button"
              >
                Cancel
              </button>
            </div>

            <div className="pt-5">
              <button className="bg-blue-600  hover:bg-gray-100 hover:text-black text-white-800 font-semibold py-2 px-10 border border-black rounded shadow">
                Subscribe
              </button>
            </div>
          </form>
        </div>
        <div>
          <h2 className="text-2xl">Follow Us</h2>
          <div className="md:flex pt-10 gap-4 flex justify-around">
            <div className="border-white border-2 rounded-full p-2">
              <SiRiotgames size="25" />
            </div>
            <div className="border-white border-2 rounded-full p-2 ">
              <SiInstagram size="25" />
            </div>
            <div className="border-white border-2 rounded-full p-2">
              <SiYoutube size="25" />
            </div>
          </div>
        </div>
        <div>
          <h2 className="text-xl">Call Us</h2>

          <p className="md:pt-10 pt-5 ">+91 7569051695</p>
        </div>
      </div>
     <div>
      <p className="border-b-2 max-w-[85%] m-auto"></p>
     <div className="grid md:grid-cols-2 grid-cols-1 p-10">
        <div>
          <p className="text-xl text-white">@2023 IsmailTechnical. All Rights Reserved</p>
        </div>
        <div>
        <p className="text-xl text-white uppercase">Private Policy & 
        <br/>Terms and Conditions</p>
        </div>
      </div>
     </div>
    </div>
  );
};

export default Footer;
