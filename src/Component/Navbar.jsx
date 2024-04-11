import React from "react";
import mainLogo from "./mainLogo.webp";

function Navbar() {
  return (
    <div>
      <div className="w-full flex justify-between">
        <img
          src={mainLogo}
          alt=""
          className="w-28 h-28 ml-36 mt-6 rounded-full"
        />
        <div className="text-xl text-violet-600">
          {/* <button className="mr-4 border border-black rounded-full px-3.5 py-1">
            3-day free trial
          </button> */}
          <button className="mr-24 mt-6 border drop-shadow-xl bg-violet-600 rounded-full px-4 py-1  text-white">
            Log In
          </button>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
