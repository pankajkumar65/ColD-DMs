import React from "react";
import Card2 from "./Card2";
import minLogo1 from "./minLogo1.svg";
import minLogo2 from "./minLogo2.svg";
import minLogo3 from "./minLogo3.svg";
import minLogo4 from "./minLogo4.svg";
import minLogo5 from "./minLogo5.svg";
import minLogo6 from "./minLogo6.svg";

const Component2 = () => {
  return (
    <>
      <div className=" flex justify-center items-center mt-60 mb-20">
        <h1 className="text-center w-1/2 font-bold text-5xl text-white">
          Get Better Results With Benefits
        </h1>
      </div>
      <div className="flex justify-center items-center gap-7 m-10 h-auto flex-wrap">
        <Card2
          logo={minLogo1}
          title={"Effortless Recording"}
          para={
            "Say goodbye to complex setups. With Loom Genie, recording your screen and camera is as easy as waving a wand."
          }
        />
        <Card2
          logo={minLogo2}
          title={"Seamless Sharing"}
          para={
            "Instantly share your AI-powered video messages with teammates, clients, or anyone in your magical circle. Boost productivity and collaboration."
          }
        />
        <Card2
          logo={minLogo3}
          title={"Edit Like a Pro"}
          para={
            "Rewind, trim, and enhance—just like editing text. Loom Genie transforms video editing into child’s play."
          }
        />
        <Card2
          logo={minLogo4}
          title={"Anywhere Collaboration"}
          para={
            "Embed Loom videos in Google Workspace, Slack, or your favorite platforms. Connect asynchronously, no matter where you are."
          }
        />
        <Card2
          logo={minLogo5}
          title={"Privacy First"}
          para={
            "Our enchanting security features ensure your data remains guarded. Single Sign-On (SSO), SCIM, and custom privacy settings included."
          }
        />
        <Card2
          logo={minLogo6}
          title={"Interactive Communication"}
          para={
            "Add tasks, CTAs, and comments to your videos. Plus, enjoy transcripts in 50+ languages for global teams."
          }
        />
      </div>
    </>
  );
};

export default Component2;
