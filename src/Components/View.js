import React from "react";
import { BsFillGridFill } from "react-icons/bs";
import { FaThList } from "react-icons/fa";
const View = () => {

  return (
    <div className="flex gap-1">
      <div className="p-2 ">
        <button>
          <BsFillGridFill/>
        </button>
      </div>
      <div className="p-2">
        <button>
         
          <FaThList />
        </button>
      </div>
    </div>
  );
};

export default View;
