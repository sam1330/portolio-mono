"use client";

import { useEffect, useState } from "react";
import MeIcon from "./Icons/MeIcon";

const AboutMe = () => {
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
  return (
    <div
      id="about-me"
      className="w-full min-h-[700px] flex justify-center md:h-4/5 items-center"
    >
      <div className="w-full h-full min-h-[700px] md:w-3/4 flex flex-col md:flex-row justify-between relative pt-5 md:pt-[100px]">
        <div className="md:d-inline-block flex justify-center items-center">
          <MeIcon
            width={windowSize.width > 1024 ? 530 : "80%"}
            height={windowSize.width > 1024 ? 572 : "80%"}
          />
        </div>
        <div className="w-full px-5 md:w-[55%]">
          <h1 className="md:mt-10 text-6xl font-light leading-[5rem] mb-10">
            About <span className="font-semibold">Me</span>
          </h1>
          <p className=" text-stone-500 mb-7">
            I&apos;m a Full Stack Developer and AI Engineer with 4+ years of
            experience building scalable, high-impact software solutions. My
            passion lies in transforming complex real-world challenges into
            elegant, efficient, and measurable digital solutions.
          </p>
          <p className=" text-stone-500 mb-7">
            I specialize in: Developing full-stack applications using Next.js,
            Laravel, Node.js, MySQL, and Docker Designing and integrating AI
            tools to automate and optimize business processes Implementing TDD,
            DDD, and scalable architecture patterns Migrating legacy codebases
            to modern stacks writing clean, reusable code with an emphasis on
            developer experience and performance
          </p>
          <p className=" text-stone-500">
            I’m currently focused on advancing my AI engineering skills and
            contributing to impactful SaaS platforms and government tech. Open
            to collaborations, consulting, or mentoring opportunities in AI,
            full-stack, and systems design.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
