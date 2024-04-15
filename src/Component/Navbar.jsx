import React from "react";
import mainLogo from "./Images/mainLogo.webp";

function Navbar() {
  return (
    <div>
      <div className="w-full flex justify-between">
        <img
          src={mainLogo}
          alt=""
          className="w-28 h-28 ml-36 mt-6 rounded-full"
        />
        <div className="text-lg text-violet-600">
          {/* <button className="mr-4 border border-black rounded-full px-3.5 py-1">
            3-day free trial
          </button> */}
          <button className="mr-24 mt-6 border drop-shadow-xl bg-violet-600 hover:bg-violet-500 rounded-full px-4 py-1  text-white">
            Log In
          </button>
        </div>
      </div>
      <div className="flex flex-col text-center justify-center items-center mt-28">
        <h1 className="text-5xl w-1/2 h-32 font-bold bg-gradient-to-r from-violet-500   to-violet-100 text-transparent bg-clip-text">
          Loom Genie: Unleash Your Loom Magic!
        </h1>
        <h1 className="text-xl w-1/2 text-white text-center">
          Capture attention, simplify recording, and create captivating videos
          effortlessly with Loom Genie. Elevate your communication game today!
        </h1>
      </div>
    </div>
  );
}

export default Navbar;
