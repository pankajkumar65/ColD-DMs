import React from "react";

const Card3 = ({ title, para, price, buttonText, msg1, msg2, msg3 }) => {
  return (
    <>
      <div className="w-96 h-[570px] rounded-2xl bg-violet-600 flex flex-col gap-5 justify-center items-center transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:bg-violet-600 duration-300">
        <div className=" w-[317px] h-[76px] flex flex-col justify-center items-start bg-violet-600 mb-4">
          <h1 className="text-2xl font-bold text-white bg-violet-600">
            {title}
          </h1>
          <p className="text-white bg-violet-600">{para}</p>
          <div className="border-b border-white w-[317px] h-2 my-[32px]"></div>
        </div>
        <div className="w-80 text-start flex flex-col justify-center  bg-violet-600">
          <h1 className=" h-24 text-center text-4xl font-bold text-white mt-2 bg-violet-600">
            {price}
          </h1>
          <a
            className="bg-zinc-100 hover:bg-gray-300 drop-shadow-xl text-center py-3  rounded-full px-3.5"
            href="https://google.com/"
          >
            <button>{buttonText}</button>
          </a>
          <div className="border-b border-white w-[317px] h-2 my-[25px] bg-violet-600"></div>
        </div>
        <div className="w-80 text-white font-bold gap-4 flex flex-col justify-center items-start bg-violet-600">
          <div className="flex flex-row gap-2 bg-violet-600">
            <span class="material-symbols-outlined bg-violet-600">check</span>
            <h1 className="bg-violet-600">{msg1}</h1>
          </div>
          <div className="flex flex-row gap-2 bg-violet-600 ">
            <span class="material-symbols-outlined bg-violet-600">check</span>
            <h1 className="bg-violet-600">{msg2}</h1>
          </div>
          <div className="flex flex-row gap-2 bg-violet-600">
            <span class="material-symbols-outlined bg-violet-600">check</span>
            <h1 className="bg-violet-600">{msg3}</h1>
          </div>
        </div>
      </div>
    </>
  );
};

export default Card3;
