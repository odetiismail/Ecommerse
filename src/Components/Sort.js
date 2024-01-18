import React, { useState } from "react";
//import View from "./View";
import { BsFillGridFill } from "react-icons/bs";
import { FaThList } from "react-icons/fa";
import MainSection from "./MainSection";
import { useSelector, useDispatch } from "react-redux";
import { SortingPro } from "../reducer/Slice";
//import { SortingPro } from "../reducer/Slice";
const Sort = () => {
  const [view, setView] = useState(true);

  const currData = useSelector((curr) => curr.counter.filterProduct);
  const dispatch = useDispatch();
  const Ava = currData.length;

  const Change = (e) => {
    //console.log(e.target.value)
    dispatch(SortingPro(e.target.value));
  };
  //console.log(ava)
  const Grid = () => {
    setView(true);
    //alert('')
  };
  const List = () => {
    setView(false);
  };
  return (
    <>
      <div className="w-[100%] flex justify-around p-1 rounded-full  border-2 border-black bg-white">
        <div>
          <div className="flex gap-1">
            <div className={view ? "p-2 bg-gray-600 h-9 rounded-lg" : "p-2"}>
              <button>
                <BsFillGridFill onClick={Grid} />
              </button>
            </div>
            <div className={view ? "p-2" : "p-2 bg-gray-600 h-9 rounded-lg"}>
              <button>
                <FaThList onClick={List} />
              </button>
            </div>
          </div>
        </div>
        <div className="pt-2 md:text-lg md:font-bold">
          Available Products {Ava}
        </div>
        <div>
          <select onChange={Change}>
            <option value="low">Price(low)</option>

            <option value="high">Price(High)</option>

            <option value="a-z">Price(A-Z)</option>

            <option value="z-a">Price(Z-A)</option>
          </select>
        </div>
      </div>
      <MainSection view={view} />
    </>
  );
};

export default Sort;
