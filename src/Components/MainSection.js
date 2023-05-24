import React, { useState } from "react";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import FormatePrice from "./FormatePrice";
const MainSection = ({ view }) => {
  const currData = useSelector((curr) =>curr.counter.filterProduct);
 // console.log(currData)
 if(currData.length===0){
 return (
  <div>Loading . . .</div>
 )
 }
  return (
    <div>
      {view ? (
        <div className="grid md:grid-cols-3 w-[80%] m-auto md:mt-20 mt-10 gap-3">
          {currData.map((curr, k) => {
            return (
              <div key={k}>
                <NavLink to={`/singleProduct/${curr.id}`}>
                  <div className="p-2 relative  overflow-hidden bg-cover bg-no-repeat m-auto bg-gray-100  rounded-lg">
                    <img
                      src={curr.image}
                      className=" max-w-xm  transition duration-200  hover:scale-110 m-auto "
                      alt="Louvre"
                    />

                    <div cla                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  ssName=" flex justify-between text-lg pt-3">
                      <p>{curr.name}</p>
                      <p className="text-blue-600">
                        <FormatePrice price={curr.price} />
                      </p>
                    </div>
                  </div>
                </NavLink>
              </div>
            );
          })}
        </div>
      ) : (
        <div className="grid grid-cols-1 gap-3 md:mt-20 mt-10 md:w-[40%] w-[80%]  m-auto">
          {currData.map((curr, k) => {
            return (
              <div key={k}>
                <NavLink to={`/singleProduct/${curr.id}`}>
                  <div className="p-2 relative  overflow-hidden bg-cover bg-no-repeat m-auto bg-gray-100  rounded-lg">
                    <img
                      src={curr.image}
                      className=" max-w-xm  transition duration-200  hover:scale-110 m-auto "
                      alt="Louvre"
                    />

                    <div className=" flex justify-between text-lg pt-3">
                      <p>{curr.name}</p>
                      <p className="text-blue-600">
                        <FormatePrice price={curr.price} />
                      </p>
                    </div>
                  </div>
                </NavLink>
              </div>
            );
          })}
        </div>
      )}
    </div>
    //    <div className="grid grid-cols-1 gap-3 md:mt-20 mt-10 md:w-[40%] w-[80%]  m-auto">
    //     {/* {currData.map((curr)=>{
    //         return(<>
    //          <NavLink to={`/singleProduct/${curr.id}`}>
    //         <div className="p-2 relative  overflow-hidden bg-cover bg-no-repeat m-auto bg-gray-100  rounded-lg">
    //         <img
    //           src={curr.image}
    //           className=" max-w-xm  transition duration-200  hover:scale-110 m-auto "
    //           alt="Louvre"
    //         />

    //         <div className=" flex justify-between text-lg pt-3">
    //           <p>{curr.name}</p>
    //           <p className="text-blue-600">
    //             <FormatePrice price={curr.price} />
    //           </p>
    //         </div>
    //       </div>
    //     </NavLink>
    //         </>)
    //     })} */}

    // {/* {currData.map((curr)=>{
    //         return(<>
    //          <NavLink to={`/singleProduct/${curr.id}`}>
    //         <div className="p-2 relative  overflow-hidden bg-cover bg-no-repeat m-auto bg-gray-100  rounded-lg">
    //         <img
    //           src={curr.image}
    //           className=" max-w-xm  transition duration-200  hover:scale-110 m-auto "
    //           alt="Louvre"
    //         />

    //         <div className=" flex justify-between text-lg pt-3">
    //           <p>{curr.name}</p>
    //           <p className="text-blue-600">
    //             <FormatePrice price={curr.price} />
    //           </p>
    //         </div>
    //       </div>
    //     </NavLink>
    //         </>)
    //     })} */}

    //    </div>
  );
};

export default MainSection;
