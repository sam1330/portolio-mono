'use client'

import { useEffect, useState } from "react";
import Banner from "./Icons/Banner";

const Hero = () => {
  const [windowSize, setWindowSize] = useState({
    width: 0,
    height: 0,
  });

  useEffect(() => {
    function handleResize() {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    }

    window.addEventListener('resize', handleResize);
    handleResize();

    return () => window.removeEventListener('resize', handleResize);  

  }, []);
  return (
    <div className="w-full h-screen min-h-[700px] flex justify-center md:h-4/5 items-center ">
      <div className="w-full md:h-full min-h-[700px] md:w-3/4 flex flex-col md:flex-row md:justify-between md:items-center relative">
        <p className="text-6xl font-light w-full md:w-1/2 leading-[5rem] px-10 md:px-0">
          Hello! I am <span className="font-extrabold">Samuel</span>.<br />
          <span className="font-extrabold">Full Stack</span> Engineer <br />Based in{" "}
          <span className="font-extrabold">LATAM</span>.
        </p>
        <div className="d-inline-block md:absolute md:right-0 md:top-10 flex justify-center items-center">
            <Banner width={windowSize.width > 565 ? 530 : '80%' } height={windowSize.width > 565 ? 572 : 375} />
        </div>
      </div>
    </div>
  );
};

export default Hero;
