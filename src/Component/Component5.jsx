import React from "react";
import dot from "./dot-img.svg";

const Component5 = () => {
  return (
    <>
      <div
        style={{
          backgroundImage: `url(${dot})`,
          color: "#181b20",
        }}
        //  style={{ boxShadow: "0 80px 150px -50px #7c3aed" }}
        className="flex flex-col justify-center items-center mt-56 pb-28 gap-7 "
      >
        <h1 className="text-5xl w-1/2 text-center font-bold bg-gradient-to-r from-violet-500   to-violet-100 text-transparent bg-clip-text">
          Ready to scale your business with the best Loom tool?
        </h1>
        {/* <p className="text-xl">Take the 3 day free trial</p> */}

        <p className="text-xl text-white">5 minutes or less setup</p>
        <button className="mr-4 text-white bg-violet-600 hover:bg-violet-500 rounded-full px-6 py-3">
          Plan Selection
        </button>
      </div>
    </>
  );
};

export default Component5;
