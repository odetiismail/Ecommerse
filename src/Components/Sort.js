import React, { useState } from "react";
//import View from "./View";
import { BsFillGridFill } from "react-icons/bs";
import { FaThList } from "react-icons/fa";
import MainSection from "./MainSection";
const Sort = () => {
  const [view, setView] = useState(true);
  const Grid = () => {
    setView(true);
    //alert('')
  };
  const List = () => {
    setView(false);
  };
  return (
    <>
      <div className="w-[100%] flex justify-around p-2 rounded-full  border-2 border-black bg-white">
        <div>
          <div className="flex gap-1">
            <div className="p-2 ">
              <button>
                <BsFillGridFill onClick={Grid} />
              </button>
            </div>
            <div className="p-2">
              <button>
                <FaThList onClick={List} />
              </button>
            </div>
          </div>
        </div>
        <div>Available Products</div>
        <div></div>
      </div>
      <MainSection view={view} />
    </>
  );
};

export default Sort;
