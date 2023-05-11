import React, { useEffect, useState } from "react";

const MyImage = ({ imgs = [{ url: "" }] }) => {
  //console.log(imgs)
  const [mainImage, setMainImage] = useState(imgs[0])
 
  useEffect(()=>{
    setMainImage(imgs[0])
  },[imgs])
  
  return (
    <div className="grid md:grid-cols-2 w-[100%]">
      <div className="flex md:block w-[100%] md:flex-start-end">
        {imgs.map((curr, index) => {
          // console.log(curr)
          return (
            <figure key={index}>
              <img
                src={curr.url}
                onClick={() => setMainImage(curr)}
                className="m-auto pt-5 md:max-w-[45%] w-[90%]"
              />
            </figure>
          );
        })}
      </div>
      <div className="w-[100%]">
       
        <img
          src={mainImage.url}
          width="100%"
          className=" pt-10 md:pt-32 md:max-w-[120%] max-w-[320px] m-auto"
          alt={mainImage.filename}
        />
      </div>
    </div>
  );
};

export default MyImage;
