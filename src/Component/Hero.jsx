import React from "react";
import video from "./video.mp4";
function Hero() {
  return (
    <>
      <div className="text-center mt-36 w-full">
        <h1 className="text-5xl w-[750px] ml-80 font-bold text-violet-400">
          Loom Genie: Unleash Your Loom Magic!
        </h1>
        <h1 className="mt-5 text-xl w-1/2 text-center ml-80">
          Capture attention, simplify recording, and create captivating videos
          effortlessly with Loom Genie. Elevate your communication game today!
        </h1>
        <button className=" mt-9  bg-violet-600 rounded-full px-6 py-3   text-white text-xl">
          Plan Selection
        </button>
      </div>
      <div className="w-2/3 ml-60 mt-20">
        <div className="aspect-w-16 aspect-h-9 ">
          {/* <video src={video} controls="0" autoplay="autoplay"></video> */}
          <iframe
            className="rounded-2xl"
            src={video}
            frameBorder="1"
            allow="autoplay;fullScreen;encrypted-media"
            allowFullScreen
            controls={false}
          ></iframe>
        </div>
      </div>
    </>
  );
}

export default Hero;
