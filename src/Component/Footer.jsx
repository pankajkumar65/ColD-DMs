import React from "react";

function Footer() {
  return (
    <>
      <div className="bg-violet-600 text-zinc-100 w-full h-44 flex flex-col justify-center items-center">
        <div className="border-b border-white w-[90%] h-2 bg-violet-600"></div>
        <h1 className="bg-violet-600">Copyright © 2024 LOOMGenie.com</h1>
        <h1 className="m-4 underline underline-offset-2 bg-violet-600 cursor-pointer">
          Terms of Service
        </h1>
      </div>
    </>
  );
}

export default Footer;
