import React from "react";

function Hero() {
  return (
    <div>
      <div className="text-center mt-36 w-full">
        <h1 className="text-5xl w-[750px] ml-80 font-bold text-blue-400">
          Get <span className="italic">AT LEAST</span> One New Client Or We'll{" "}
          <span className="italic">REFUND</span>You.
        </h1>
        <h1 className="mt-5 text-xl">
          Find Instagram leads, send cold DMs on autopilot, and effortlessly get
          more clients.
        </h1>
        <button className=" mt-9 border border-black rounded-full px-6 py-3 bg-black text-white text-xl">
          3-day free trail
        </button>
      </div>
      <div className="w-2/3 ml-60 mt-20"  >
        <div className="aspect-w-16 aspect-h-9 ">
          <iframe className="rounded-2xl"
            src="https://www.youtube.com/embed/ZcEmFPArCzM"
            frameborder="1"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          ></iframe>
        </div>
      </div>
    </div>
  );
}

export default Hero;
