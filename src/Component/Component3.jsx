import React from "react";
import Card3 from "./Card3";

const Component3 = () => {
  return (
    <>
      <div className="h-32 mt-44">
        <h1 className="text-center text-5xl font-bold">Pricing Plan</h1>
      </div>
      <div className="flex flex-row justify-center items-center gap-7">
        <Card3
          title={"Pro plan"}
          para={
            "Perfect for businesses that want to give Instagram outreach a try."
          }
          price={"$99/mo"}
          buttonText={"3 day free trail"}
          msg1={"50-70+ messages per day"}
          msg2={"1 IG account"}
          msg3={"Guaranteed client or refund"}
        />
        <Card3
          title={"Scale plan"}
          para={
            "The plan for businesses that want to scale as fast as possible."
          }
          price={"$174/mo"}
          buttonText={"3 day free trail"}
          msg1={"1000s of messages per day"}
          msg2={"Up to 50 IG accounts"}
          msg3={"Scale up your outreach"}
        />
        <Card3
          title={"Enterprise plan"}
          para={"Want to use hundreds of accounts? Use our 'white glove' plan."}
          price={"Custom"}
          buttonText={"Contact us"}
          msg1={"Need even more accounts?"}
          msg2={"Expert consulting"}
          msg3={"Account sourcing"}
        />
      </div>
    </>
  );
};

export default Component3;
