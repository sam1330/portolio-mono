import Image from "next/image";
import ElaniinImage from "@/components/Icons/elaniin_logo.jpg";
import ProGPSImage from "@/components/Icons/PROGPS.jpg";
import AuraImage from "@/components/Icons/aura.png";
import React from "react";
import { StaticImport } from "next/dist/shared/lib/get-img-props";

interface IEmployment {
  title: string;
  location: string;
  date: string;
  image: StaticImport | string;
  description: string;
  techUsed: string;
}

const MyExperience = () => {
  const employments: Array<IEmployment> = [
    {
      title: "Lead AI Engineer at Elaniin",
      location: "Remote",
      date: "Dec 2024 - Present",
      image: ElaniinImage,
      description:
        "Architected SpecAgent, a multi-agent AI backend (NestJS/TypeScript, Google ADK orchestration, Claude via Vertex AI) that interviews users to auto-generate QA specifications and test cases for a government digital-procedures system, cutting manual spec-writing effort for QA teams. Built a Next.js 16/React 19 frontend with SSE-streamed real-time AI chat, tool-call visualization, and a live diffing/review workflow. Built a second AI agent — a custom Claude Code skill — that generates Playwright/TypeScript E2E test suites directly from approved specs, achieving almost-zero manual test authoring. Also architected and deployed a custom AI Customer Service/Sales Agent handling hundreds of thousands of monthly requests, and document AI/OCR pipelines that cut legal-document processing time by 60%.",
      techUsed:
        "NestJS, Google ADK, Claude API (Vertex), Gemini API, Gemini Live API, OpenAI API, RAG, Prisma ORM, PostgreSQL, Keycloak/JWT, Google Cloud Run, GitLab CI/CD, Next.js, React, TypeScript, Langfuse, OpenTelemetry",
    },
    {
      title: "Full Stack Engineer at Elaniin",
      location: "Remote",
      date: "Apr 2023 - Dec 2024",
      image: ElaniinImage,
      description:
        "Developed full stack features using Next.js, Laravel, MySQL, and Docker. Contributed to a significant government system for El Salvador that automated visa and residency application processes, achieving an 80% reduction in response times for reports, fines, and extensions. Refactored code into high-quality, reusable components and implemented robust design patterns. Ensured system reliability through strict TDD and DDD methodologies.",
      techUsed:
        "Next.js, Typescript, PHP, Laravel, MySQL, Docker, Git, GitLab, Tailwind, React Query, Cypress, PHPUnit, Docker Compose",
    },
    {
      title: "Full Stack Engineer at ProGPS & Technology",
      location: "Remote",
      date: "Jul 2022 - Apr 2023",
      image: ProGPSImage,
      description:
        "Delivered custom software solutions in React.js and Laravel to meet specific client business requirements. Enhanced application responsiveness by optimizing Laravel queries and overall system performance, improving API response times. Committed to code excellence by writing testable, high-quality code adhering to SOLID principles and industry best practices.",
      techUsed:
        "React.js, Laravel, MySQL, Git, BitBucket, Docker, Bootstrap, PHPUnit, Jest",
    },
    {
      title: "Jr. Full Stack Engineer at Aura Systems",
      location: "Santiago, D.R.",
      date: "Apr 2021 - Jul 2022",
      image: AuraImage,
      description:
        "Modernized the frontend stack by migrating legacy Vue.js 2 components to Vue.js 3 and TypeScript. Engineered cross-platform hardware interactions by creating a Python-based desktop application that utilized sockets for communication between Jackpot machines and computers. Developed robust backend architecture using Laravel to create high-performance API endpoints.",
      techUsed:
        "Vue 2, Vue 3, JavaScript, TypeScript, Laravel, MySQL, Python, Socket.IO, Pusher, Electron",
    },
  ];
  return (
    <div id="experience" className="w-full flex justify-center mt-20 bg-black text-white pb-20">
      <div className="w-full md:w-3/4 flex flex-col items-center text-center">
        <h1 className="mt-10 mb-10 text-4xl md:text-6xl font-light leading-[3rem] md:leading-[5rem]">
          My <span className="font-semibold">Experience</span>
        </h1>

        {employments.map((employment, index) => (
          <div
            key={index}
            className="border-[1px] border-white/[0.3] rounded w-full px-6 py-6 md:px-9 md:py-10 text-left mb-4"
          >
            <div className="flex flex-col md:flex-row justify-between flex-wrap">
              {/* Company logo and title */}
              <div className="flex flex-row flex-wrap gap-4 items-center md:h-[50px] mb-4 md:mb-0">
                <Image
                  src={employment.image}
                  alt={"Elaniin"}
                  width={50}
                  height={50}
                />
                <h3 className="font-semibold text-xl md:text-2xl">
                  {employment.title}
                </h3>
                <span className="text-lg text-stone-300">-</span>
                <h3 className="text-sm md:text-xl text-stone-300">
                  {employment.location}
                </h3>
              </div>

              {/* Date */}
              <h3 className="text-sm md:text-xl flex items-center h-[50px] text-stone-300">
                {employment.date}
              </h3>
            </div>

            {/* Description */}
            <p className="mt-4 text-stone-300 text-sm md:text-base">
              {employment.description}
            </p>

            {/* Tech used */}
            <p className="mt-4 text-sm md:text-base">
              <span className="font-semibold">Technologies used: </span>
              {employment.techUsed}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MyExperience;
