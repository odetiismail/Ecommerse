import React from "react";
import { useDispatch } from "react-redux";
import { Clear } from "../reducer/Slice";

const ClearFilter = () => {

    const dispatch=useDispatch()
const setClearFilter=()=>{
 dispatch(Clear())
}
  return (
    <div className="m-4">
      <button onClick={setClearFilter} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 md:px-6   px-4 rounded-full">
        Clear Filter
      </button>
    </div>
  );
};

export default ClearFilter;
