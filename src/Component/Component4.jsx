import React, { useState } from "react";
import Card4 from "./Card4";

const Component4 = () => {
  const [show, setShow] = useState(false);

  const toggleShow = () => {
    setShow(!show);
  };

  return (
    <>
      <div className="h-32 mt-44">
        <h1 className="text-center text-5xl font-bold">FAQs</h1>
      </div>
      <div className="w-full flex gap-3 flex-col justify-center items-center pb-20">
        <Card4 />
        <Card4 />
        <Card4 />
        <Card4 />
        <Card4 />
      </div>

      {/* <div className="flex flex-col justify-center items-center">
        <h1 className=" mb-3 text-4xl text-center font-bold text-gray-800">
          Still have questions?
        </h1>
        <p className="text-xl">Send us an email or text us anytime</p>
        <div className="flex flex-row justify-center items-center gap-5">
          <button className="mt-6 border border-white rounded-full px-6 py-3 bg-black text-white">
            Email Us
          </button>
          <button className="mt-6 border border-black rounded-full px-6 py-3 bg-black text-white">
            Telegram
          </button>
          <button className="mt-6 border border-black rounded-full px-6 py-3 bg-black text-white">
            WhatsApp
          </button>
        </div> */}
      {/* </div> */}
    </>
  );
};

export default Component4;
