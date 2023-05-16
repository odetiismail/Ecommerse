import React from "react";
import { FaStar, FaStarHalfAlt, FaRegStar } from "react-icons/fa";
const Star = ({ stars, reviews }) => {
  // console.log(stars);
  const starRating = Array.from({ length: 5 }, (ele, index) => {
    const number = index + 0.5;
    //console.log(number);
    return (
      <div key={index} className=" inline-block">
        <span>
          {stars >= index + 1 ? (
            <FaStar  className="text-orange-400 w-[17px] md:w-[20px]" />
          ) : stars >= number ? (
            <FaStarHalfAlt  className="text-orange-400 w-[17px] md:w-[20px]" />
          ) : (
            <FaRegStar  className="text-orange-400 w-[17px] md:w-[20px]" />
          )}
        </span>
      </div>
    );
  });
  return (
    <div className=" text-lg flex gap-6">
      <div>{starRating}</div>

      <div>( {reviews} Customer Reviews)</div>
    </div>
  );
};

export default Star;
