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
            I&apos;m a Full Stack and AI Engineer with 5+ years of experience
            building scalable, high-impact software solutions. My expertise lies
            at the intersection of robust web architecture and cutting-edge
            Generative AI. I transform complex business challenges into
            measurable digital success.
          </p>
          <p className=" text-stone-500 mb-7">
            I specialize in: Building full-stack applications with Next.js,
            React, Laravel, Node.js, PostgreSQL, and Docker Designing and
            deploying custom AI agents and LLM-powered solutions (Gemini API,
            Vertex AI, OpenAI) Automating document extraction and business
            processes with generative AI Implementing TDD, DDD, and scalable
            architecture patterns Writing clean, testable code with emphasis on
            performance and developer experience
          </p>
          <p className=" text-stone-500">
            Currently, I’m leading AI initiatives at Elaniin, architecting
            custom AI agents managing hundreds of thousands of monthly requests.
            I’m passionate about leveraging generative AI to solve real-world
            problems and scale business impact. Open to collaborations on AI
            innovation, consulting opportunities, and mentoring in AI
            engineering and full-stack development.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
