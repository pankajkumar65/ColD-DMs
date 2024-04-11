import React from "react";
const Card2 = ({ logo, title, para }) => {
  return (
    <>
      <div className="w-96 h-48  rounded-2xl bg-violet-500 flex gap-6 justify-center items-center">
        <div className="border border-white bg-white rounded-xl h-14 w-14 mb-10 flex justify-center items-center">
          <img src={logo} alt="" className="w-10 h-10 bg-white" />
        </div>
        <div className="w-60 text-start flex flex-col gap-2">
          <h1 className=" text-2xl font-bold text-white">{title}</h1>
          <p className="text-white font-semibold ">{para}</p>
        </div>
      </div>
    </>
  );
};

export default Card2;
