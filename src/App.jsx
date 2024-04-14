import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Navbar from "./Component/Navbar";
import Hero from "./Component/Hero";
import Component1 from "./Component/Component1";
import Component2 from "./Component/Component2";
import Component3 from "./Component/Component3";
import Component4 from "./Component/Component4";
import Component5 from "./Component/Component5";
import Footer from "./Component/Footer";
import { useRef } from "react";

function App() {
  const resultRef = useRef(null);
  return (
    <>
      <Navbar />
      <Hero resultRef={resultRef} />
      <Component1 />
      <Component2 />
      <Component3 ref={resultRef} />
      <Component4 />
      <Component5 resultRef={resultRef} />
      <Footer />
    </>
  );
}

export default App;
