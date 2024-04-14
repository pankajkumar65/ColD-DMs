import React from "react";
const Card2 = ({ logo, title, para }) => {
  return (
    <>
      <div className="w-96 h-48  rounded-2xl bg-violet-500 flex gap-6 justify-center items-center">
        <div className="border rounded-xl h-14 w-14 mb-10 flex justify-center items-center">
          <img src={logo} alt="" className="w-10 h-10 " />
        </div>
        <div className="w-60 text-start flex flex-col text-white">
          <h1 className=" text-2xl font-bold bg-violet-500 pb-2">{title}</h1>
          <p className="font-semibold bg-violet-500">{para}</p>
        </div>
      </div>
    </>
  );
};

export default Card2;
