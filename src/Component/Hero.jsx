import { React, useRef } from "react";
import video from "./video.mp4";
import dot from "./dot-img.svg";
function Hero() {
  const ref = useRef(null);

  const handleClick = (elementRef) => {
    window.scrollTo({
      top: elementRef.current.offsetTop,
      behavior: "smooth",
    });
  };

  return (
    <>
      <div
        style={{
          backgroundImage: `url(${dot})`,
          color: "#181b20",
        }}
        className=" pb-28 pt-10 flex flex-col justify-center items-center"
      >
        <button
          onClick={() => handleClick(ref)}
          className="bg-violet-600 hover:bg-violet-500 text-center rounded-full px-6 py-3 text-white text-lg"
        >
          Plan Selection
        </button>

        <div
          style={{ boxShadow: "0 80px 150px -50px #7c3aed" }}
          className="w-2/3 mt-20 rounded-2xl"
        >
          <div ref={ref} className="aspect-w-16 aspect-h-9 rounded-2xl ">
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
      </div>
    </>
  );
}

export default Hero;
