import React, { useState } from "react";
import Card4 from "./Card4";

const Component4 = () => {
  const [show, setShow] = useState(false);

  const toggleShow = () => {
    setShow(!show);
  };

  return (
    <>
      <div className="h-32 mt-60 ">
        <h1 className="text-center text-5xl font-bold text-white">FAQs</h1>
      </div>
      <div className="w-full flex gap-3 flex-col justify-center items-center pb-20 ">
        <Card4 question={"Are the prices monthly?"} answer={"Yes."} />
        <Card4
          question={"Is there a plan with unlimited credits?"}
          answer={"Please contact us for that."}
        />
        <Card4
          question={"Do I need loom premium to use Loom Genie?"}
          answer={
            "Yes you need a loom premimum account to properly use Loom Genie."
          }
        />
        <Card4
          question={"Is there any competitor toolon the market?"}
          answer={
            "No. Loom Genie is unique to its kind and the only Loom automation tool out there."
          }
        />
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
