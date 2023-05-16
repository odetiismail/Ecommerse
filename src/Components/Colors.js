import React from "react";

const Color = ({ colors = [] }) => {
  //    const col=colors;
  //    //console.log(col)
  //     const  name =['a','b','c']
  //     const toggle={}

  //     name.forEach((curr,index)=>{
  //         toggle[curr]=col[index]
  //     })
  //    // console.log(toggle)

  return (
    <div>
      {colors.map((cur, index) => {
        return (
          <button
            key={index}
            style={{ backgroundColor: cur }}
            className=" rounded-3xl p-3 m-1 md:m-2"
          ></button>
        );
      })}
    </div>
  );
};

export default Color;
