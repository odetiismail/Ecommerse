import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { companyFil } from "../reducer/Slice";
const CompanyFilter = () => {
  const da = useSelector((curr) => curr.counter.products);
  const dispatch = useDispatch();
  const Com = (da) => {
    
    const cat = da.map((curr) => {
      return curr.company;
    });

    const fil = ["All", ...new Set(cat)];

    return fil;
  };

  const comp = Com(da);

  const comFil=(e)=>{
    
    dispatch(companyFil(e.target.value))
  }
  
  return (
    <div>
      <label
        for="countries"
        className="block m-auto mb-2 md:mt-4 text-md font-medium text-gray-900 dark:text-white"
      >
        Company
      </label>
      <select
        onChange={comFil}
        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block md:w-[60%]  p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
      >
        {comp.map((curr, k) => (
          <option value={curr} key={k}>
            {curr}
          </option>
        ))}
      </select>

      {/* <select
        id="countries"
        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-[60%] p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
      >
        <option selected>Choose a country</option>
        <option value="US">United States</option>
        <option value="CA">Canada</option>
        <option value="FR">France</option>
        <option value="DE">Germany</option>
      </select> */}
    </div>
  );
};

export default CompanyFilter;
