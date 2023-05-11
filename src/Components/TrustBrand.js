import React from "react";

const TrustBrand = () => {
  return (
    <div className=" bg-gray-100">
      <div className="text-center">
        <p className="md:text-3xl text-xl pt-10">Trust By 1000+ Companies</p>
      </div>
      <div className="md:grid md:grid-cols-5 md:p-24 p-10">
        <div className=""> 
        <img className="m-auto  max-w-[30%] md:max-w-[50%]"
          src="https://raw.githubusercontent.com/solodev/infinite-logo-carousel/master/images/image2.png"
          alt="Searching"
        />
        </div>

       <div>
       <img className="m-auto max-w-[30%] md:max-w-[50%] "
          src="https://raw.githubusercontent.com/solodev/infinite-logo-carousel/master/images/image3.png"
          alt="trusted-brands"
        />
       </div>

        <div>
        <img className="m-auto max-w-[30%] md:max-w-[50%] "
          src="https://raw.githubusercontent.com/solodev/infinite-logo-carousel/master/images/image4.png"
          alt="Searching"
        />
        </div>

       <div>
       <img className="m-auto max-w-[30%] md:max-w-[50%] "
          src="https://raw.githubusercontent.com/solodev/infinite-logo-carousel/master/images/image6.png"
          alt="Searching"
        />
       </div>
       <div>
       <img className="m-auto max-w-[30%] md:max-w-[50%] "
          src="https://raw.githubusercontent.com/solodev/infinite-logo-carousel/master/images/image8.png"
          alt="Searching"
        />
       </div>
      </div>
    </div>
  );
};

export default TrustBrand;
