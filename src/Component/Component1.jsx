import React from "react";
import logo_1 from "./logo_1.svg";
import logo_2 from "./logo_2.svg";
import logo_3 from "./Logo_3.svg";
import Card1 from "./Card1";

function Component1() {
  return (
    <>
      <div className="mt-32 mb-20 text-white">
        <h1 className="text-center font-bold text-5xl">How It Works</h1>
      </div>
      <div className="flex justify-around w-full mt-10 px-10 text-white">
        <Card1
          img={logo_1}
          title={"Create Your Account"}
          para={
            "Signing up for Loom Genie is as easy as waving a wand: Visit our website and click on the “Sign Up” button. Provide your email address and create a secure password. Voilà! You’re now part of the Loom Genie community—ready to unleash your magical video powers!."
          }
        />
        <Card1
          img={logo_2}
          title={"Upload Your Video & Loom Link"}
          para={
            "Once you’re logged in, follow these enchanting steps: Click on the “Upload” button. Select your video file—whether it’s a screen recording, a tutorial, or a product demo. Next, paste your Loom link. This is where the magic happens!"
          }
        />
        <div className="m-[-34px]">
          <Card1
            img={logo_3}
            title={"Get the Final Video & Play It"}
            para={
              "After a brief wait, your polished video will be ready. Click “Play” to watch your masterpiece and share it with your team, clients, or the world!"
            }
          />
        </div>
      </div>
    </>
  );
}

export default Component1;
