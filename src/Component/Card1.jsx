import React from "react";
import logo_1 from "./logo_1.png";
import logo_2 from "./Logo_2.png";
import logo_3 from "./Logo_3.png";

const Card1 = ({ img, title, para }) => {
  return (
    <>
      <div className="h-96 w-96 flex flex-col justify-center items-center">
        <div className="border-x-4 bg-voilet-400 border-t-4 border-violet-600 rounded-xl h-56 w-80 flex justify-center items-center">
          <img src={img} alt="Logo" className="h-44 w-44" />
        </div>
        <div className="flex flex-col text-center w-80">
          <h1 className="py-5 mt-4 text-center text-2xl font-bold">{title}</h1>
          <p className="w-80">{para}</p>
        </div>
      </div>
    </>
  );
};

export default Card1;
