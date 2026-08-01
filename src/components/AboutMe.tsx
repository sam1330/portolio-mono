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
      className="w-full min-h-[700px] flex justify-center items-center py-10"
    >
      <div className="w-full min-h-[700px] md:w-3/4 flex flex-col md:flex-row justify-between relative pt-5 md:pt-[100px]">
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
            I&apos;m a Full Stack and AI Engineer with 5+ years shipping
            production software and nearly 2 years building AI systems used by
            real customers at scale — multi-agent orchestration, LLM-powered
            backends, and production-grade TypeScript/Node.js services. Track
            record of taking generative AI from prototype to high-availability,
            observable production systems handling hundreds of thousands of
            monthly requests.
          </p>
          <p className=" text-stone-500 mb-7">
            I specialize in: building full-stack applications with Next.js,
            NestJS, React, Laravel, Node.js, PostgreSQL, and Docker; designing
            and deploying multi-agent AI systems and LLM-powered solutions
            (Claude via Vertex AI, Gemini API, OpenAI API, Google ADK, RAG);
            automating document extraction and business processes with
            generative AI; implementing LLM observability with Langfuse and
            OpenTelemetry; and writing clean, testable code with emphasis on
            performance and developer experience.
          </p>
          <p className=" text-stone-500">
            Currently, I&apos;m a Lead AI Engineer at Elaniin, architecting
            SpecAgent — a multi-agent AI QA platform for a government
            digital-procedures system — alongside AI agents managing hundreds
            of thousands of monthly requests. I&apos;m passionate about
            leveraging generative AI to solve real-world problems and scale
            business impact. Open to collaborations on AI innovation,
            consulting opportunities, and mentoring in AI engineering and
            full-stack development.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
