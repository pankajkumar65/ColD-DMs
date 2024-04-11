import React from "react";

const Card3 = ({ title, para, price, buttonText, msg1, msg2, msg3 }) => {
  return (
    <>
      <div className="w-96 h-[570px] rounded-2xl bg-violet-600 flex flex-col gap-5 justify-center items-center">
        <div className=" w-[317px] h-[76px] flex flex-col justify-center items-start">
          <h1 className="text-2xl font-bold text-white">{title}</h1>
          <p className="text-white">{para}</p>
          <div className="border-b border-white w-[317px] h-2 my-[32px]"></div>
        </div>
        <div className="w-80 text-start flex flex-col">
          <h1 className=" h-24 text-center text-[56px] font-bold text-white mb-3">
            {price}
          </h1>
          <button className=" bg-zinc-100 drop-shadow-xl  py-3  rounded-full px-3.5">
            {buttonText}
          </button>
          <div className="border-b border-white w-[317px] h-2 my-[25px]"></div>
        </div>
        <div className="w-80 text-white font-bold gap-4 flex flex-col justify-center items-start">
          <div className="flex flex-row gap-2">
            <span class="material-symbols-outlined ">check</span>
            <h1>{msg1}</h1>
          </div>
          <div className="flex flex-row gap-2 ">
            <span class="material-symbols-outlined ">check</span>
            <h1>{msg2}</h1>
          </div>
          <div className="flex flex-row gap-2">
            <span class="material-symbols-outlined ">check</span>
            <h1>{msg3}</h1>
          </div>
        </div>
      </div>
    </>
  );
};

export default Card3;
