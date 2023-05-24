import React, { useEffect, useState } from "react";
import { Sea } from "../reducer/Slice";
import { useDispatch } from "react-redux";
const Search = () => {
  const [search, setSearch] = useState("");
  const dispatch = useDispatch();

  //console.log(search)
  const handleChange = (e) => {
    e.preventDefault();
    setSearch(e.target.value);
  };

  if(search.length>0){
    dispatch(Sea(search));
  }

//   useEffect(() => {
//     dispatch(Sea(search));
//   }, [search]);
  return (
    <div className="relative mb-3 m-auto p-5 ">
      <input
        className=" shadow drop-shadow-xl border-2 border-blue-100 appearance-none  rounded w-[70%] py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline "
        type="text"
        placeholder="Search"
        onChange={handleChange}
      />
    </div>
  );
};

export default Search;
