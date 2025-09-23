"use client";

import { useEffect, useState } from "react";
import Banner from "./Icons/Banner";
import dynamic from "next/dynamic";
import Particles from "./Animated/Particles";

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

    window.addEventListener("resize", handleResize);
    handleResize();

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const DynamicSplitTextComponent = dynamic(
    () => import("./Animated/SplitText"),
    {
      ssr: false,
    }
  );

  return (
    <div className="w-full h-screen min-h-[700px] flex justify-center md:h-4/5 items-center relative">
      <div className="absolute top-0 left-0 w-full h-full z-[99]">
        <Particles
          particleColors={["#000000", "#00000"]}
          particleCount={300}
          particleSpread={10}
          speed={0.1}
          particleBaseSize={100}
          moveParticlesOnHover={true}
          alphaParticles={false}
          disableRotation={false}
        />
      </div>
      <div className="w-full md:h-full min-h-[700px] md:w-3/4 flex flex-col md:flex-row md:justify-between md:items-center relative">
        <p className="text-6xl font-light w-full md:w-1/2 leading-[5rem] px-10 md:px-0">
          <DynamicSplitTextComponent
            text="Hello! I am"
            className="text-6xl font-light text-center"
            delay={200}
            duration={0.6}
            ease="power3.out"
            splitType="chars"
            from={{ opacity: 0, y: 40 }}
            to={{ opacity: 1, y: 0 }}
            threshold={0.1}
            rootMargin="-100px"
            textAlign="center"
          />
          <span> </span>
          <DynamicSplitTextComponent
            text="Samuel."
            className="text-6xl font-extrabold text-center"
            delay={200}
            duration={0.6}
            ease="power3.out"
            splitType="chars"
            from={{ opacity: 0, y: 40 }}
            to={{ opacity: 1, y: 0 }}
            threshold={0.1}
            rootMargin="-100px"
            textAlign="center"
          />
          <br />
          <DynamicSplitTextComponent
            text="Full Stack "
            className="text-6xl font-extrabold text-center"
            delay={200}
            duration={0.6}
            ease="power3.out"
            splitType="chars"
            from={{ opacity: 0, y: 40 }}
            to={{ opacity: 1, y: 0 }}
            threshold={0.1}
            rootMargin="-100px"
            textAlign="center"
          />
          <span> </span>
          <DynamicSplitTextComponent
            text=" Engineer"
            className="text-6xl font-light text-center"
            delay={200}
            duration={0.6}
            ease="power3.out"
            splitType="chars"
            from={{ opacity: 0, y: 40 }}
            to={{ opacity: 1, y: 0 }}
            threshold={0.1}
            rootMargin="-100px"
            textAlign="center"
          />{" "}
          <br />
          <DynamicSplitTextComponent
            text="Based in"
            className="text-6xl font-light text-center"
            delay={200}
            duration={0.6}
            ease="power3.out"
            splitType="chars"
            from={{ opacity: 0, y: 40 }}
            to={{ opacity: 1, y: 0 }}
            threshold={0.1}
            rootMargin="-100px"
            textAlign="center"
          />
          <span> </span>
          <DynamicSplitTextComponent
            text=" LATAM"
            className="text-6xl font-extrabold text-center"
            delay={200}
            duration={0.6}
            ease="power3.out"
            splitType="chars"
            from={{ opacity: 0, y: 40 }}
            to={{ opacity: 1, y: 0 }}
            threshold={0.1}
            rootMargin="-100px"
            textAlign="center"
          />
        </p>
        <div className="d-inline-block md:absolute md:right-0 md:top-10 flex justify-center items-center">
          <Banner
            width={windowSize.width > 565 ? 530 : "80%"}
            height={windowSize.width > 565 ? 572 : 375}
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
