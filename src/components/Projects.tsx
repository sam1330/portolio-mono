import Image from "next/image";
import React from "react";
import HakuAILanding from "@/components/Icons/Haku AI Landing.png";

const Projects = () => {
  return (
    <div
      id="projects"
      className="w-full flex justify-center mt-20 bg-black text-white pb-20 px-5 md:px-0"
    >
      <div className="w-full md:w-full flex flex-col items-center">
        <h1 className="mt-10 mb-10 text-6xl font-light leading-[5rem]">
          My <span className="font-semibold">Projects</span>
        </h1>

        <div className="w-full flex flex-col items-center gap-20 md:gap-28">
          {/* PROJECT: HAKU AI */}
          <div className="w-full md:w-3/4 flex flex-col md:flex-row md:items-center gap-8 md:gap-16">
            <div className="w-full md:w-[45%] md:h-[400px] rounded-lg overflow-hidden">
              <Image
                src={HakuAILanding}
                alt="Haku AI landing page"
                className="rounded-lg w-full h-full object-cover"
                width={700}
                height={400}
              />
            </div>
            <div className="w-full md:w-[50%]">
              <h1 className="text-6xl font-light leading-[5rem] mb-6">
                Haku AI
              </h1>
              <p className=" text-stone-500 mb-7 text-lg">
                An AI-powered resume analysis, resume building, and job
                application platform. Haku AI parses uploaded resumes
                (PDF/DOCX), scores them with GPT-4-powered ATS analysis, and
                helps users optimize and rebuild their resumes into
                structured, editable data.
                <br />
                <br />
                Key features include AI resume analysis &amp; ATS
                optimization, AI-generated cover letters tied to job
                applications, resume PDF generation, job application
                tracking, dashboard analytics, and a credit-based billing
                system powered by Lemon Squeezy.
                <br />
                <br />
                In this project I used Node.js, TypeScript, Express, JWT auth,
                PostgreSQL, Knex.js, the OpenAI API (GPT-4), AWS S3,
                Playwright, and Lemon Squeezy.
              </p>
              <a
                href="https://haku-ai.com"
                target="_blank"
                className="inline-block mt-4 px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
              >
                Visit Haku AI →
              </a>
            </div>
          </div>

          {/* PROJECT: AI LEAD GENERATOR */}
          <div className="w-full md:w-3/4 flex flex-col-reverse md:flex-row md:items-center gap-8 md:gap-16">
            <div className="w-full md:w-[50%]">
              <h1 className="text-6xl font-light leading-[5rem] mb-6">
                AI Lead Generator
              </h1>
              <p className=" text-stone-500 mb-7 text-lg">
                A Telegram-controlled multi-agent system that finds, scores,
                and drafts outreach for sales leads. A TypeScript/Node 22
                orchestrator coordinates Discovery, Qualification, and
                Outreach agents powered by Google Gemini.
                <br />
                <br />
                Uses RAG via PostgreSQL/pgvector, MCP tools (Playwright,
                Google Search), Drizzle ORM, Langfuse/OpenTelemetry
                observability, and Sentry error monitoring.
                <br />
                <br />
                In this project I used TypeScript, Node 22, Google Gemini,
                PostgreSQL/pgvector, Drizzle ORM, MCP, Langfuse,
                OpenTelemetry, and Sentry.
              </p>
              <a
                href="https://github.com/sam1330/lead-generator"
                target="_blank"
                className="inline-block mt-4 px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
              >
                View on GitHub →
              </a>
            </div>
            <div className="w-full md:w-[45%] md:h-[400px] rounded-lg bg-gradient-to-br from-emerald-600 to-emerald-900 flex items-center justify-center">
              <div className="text-center px-6">
                <p className="text-white text-3xl font-bold">AI Lead</p>
                <p className="text-white text-3xl font-bold">Generator</p>
                <p className="text-emerald-200 text-lg mt-2">
                  Multi-Agent System
                </p>
              </div>
            </div>
          </div>
        </div>

        <div>
          <h2 className="text-xl font-semibold mt-16">
            You can find more interesting projects on my{" "}
            <a
              href="https://github.com/sam1330"
              target="_blank"
              className="text-blue-600 hover:text-blue-800 underline"
            >
              GitHub
            </a>
          </h2>
        </div>
      </div>
    </div>
  );
};

export default Projects;
