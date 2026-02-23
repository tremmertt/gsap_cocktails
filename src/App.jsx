import React from "react";
import { ScrollTrigger, SplitText } from "gsap/all";
import gsap from "gsap";

// eslint-disable-next-line no-undef
gsap.registerPlugin(ScrollTrigger, SplitText);

const App = () => {
  return (
    <div className="flex-center h-[100vh]">
      <h1 className="text-3xl text-indigo-400"> Hello, Gsap!</h1>
    </div>
  );
};

export default App;
