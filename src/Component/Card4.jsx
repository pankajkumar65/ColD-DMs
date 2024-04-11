import React, { useState } from "react";

function Card4() {
  const [show, setShow] = useState(false);

  const toggleShow = () => {
    setShow(!show);
  };

  return (
    <>
      <div
        onClick={toggleShow}
        className="flex flex-col justify-center items-start rounded-lg  border bg-violet-600 w-7/12 shadow-xl text-white h-auto p-5 cursor-pointer"
      >
        <div className="flex w-full justify-between">
          <div className="flex flex-col gap-5">
            <h1 className=" text-xl">How Do I Get Started?</h1>
            {show && (
              <p className="w-full">
                Visit our website, sign up, and start recording with the magic
                of Loom Genie! Visit our website, sign up, and start recording
                with the magic of Loom Genie!
              </p>
            )}
          </div>
          <div
            className={`${
              show ? "rotate-45 duration-150" : "rotate-0   duration-150"
            }  font-thin text-5xl w-8 h-8 flex items-center justify-center`}
          >
            +
          </div>
        </div>
      </div>
    </>
  );
}

export default Card4;
