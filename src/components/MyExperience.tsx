import Image from "next/image";
import ElaniinImage from "@/components/Icons/elaniin_logo.jpg";
import ProGPSImage from "@/components/Icons/PROGPS.jpg";
import AuraImage from "@/components/Icons/aura.png";
import React from "react";
import { StaticImport } from "next/dist/shared/lib/get-img-props";

interface IHighlightGroup {
  /** Optional sub-heading, e.g. the track inside a bigger project. */
  heading?: string;
  /** Optional one-line stack summary shown under the heading. */
  stack?: string;
  bullets: Array<string>;
}

interface IEmployment {
  title: string;
  location: string;
  date: string;
  image: StaticImport | string;
  /** Short intro paragraph shown above the bullets. */
  summary?: string;
  highlights: Array<IHighlightGroup>;
  techUsed: string;
}

const MyExperience = () => {
  const employments: Array<IEmployment> = [
    {
      title: "Lead AI Engineer at Elaniin",
      location: "Remote",
      date: "Dec 2024 - Present",
      image: ElaniinImage,
      summary:
        "SpecAgent — AI QA platform for a government digital-procedures system (El Salvador).",
      highlights: [
        {
          heading: "Core — multi-agent backend",
          stack:
            "Python 3.12 · FastAPI · Google ADK · Claude (Vertex AI) · PostgreSQL 18",
          bullets: [
            "Designed and built a multi-agent AI backend with 4 specialized agents that interview users to author 6-section QA specifications, generate test cases from approved specs, review and critique the output, and build QA artifacts — reducing manual spec-writing effort for QA teams.",
            "Architected a ~25K-LOC FastAPI service with async SQLAlchemy 2.0/PostgreSQL 18, Alembic migrations, Keycloak/JWT auth, and real-time SSE updates, deployed to Google Cloud Run across 4 environments via GitLab CI (lint, test, SCA, SonarQube).",
            "Integrated the Qase test-management API for bidirectional sync of AI-generated test cases and live test-run results pulled back into the platform.",
          ],
        },
        {
          heading: "Automation — AI-generated E2E framework",
          stack: "TypeScript · Playwright · custom Claude Code skill",
          bullets: [
            "Built an AI-driven test-generation pipeline: a custom Claude Code skill (Plan → Build) that consumes approved QA specs via the Core API and generates Playwright/TypeScript suites — page objects, fixtures, and assertions — with zero manual test authoring.",
            "Designed a role-based Page-Object-Model framework (citizen, analyst, inspector, and lead personas) with reusable form/assertion helpers for testing complex, stateful government workflows, including flaky-UI handling and Qase-linked reporting.",
            "Codified generation conventions (selector priority, naming, file structure) enforced automatically by the AI generation skill to guarantee consistency across auto-generated test code.",
          ],
        },
        {
          heading: "Web — review & monitoring console",
          stack: "Next.js 16 (App Router) · React 19 · Tailwind CSS 4",
          bullets: [
            "Built a ~21K-LOC Next.js 16/React 19 frontend (Atomic Design structure) featuring a real-time AI chat interface with SSE streaming and tool-call visualization, a TipTap Markdown editor, and NextAuth v5 + Keycloak authentication.",
            "Implemented a master-detail test-case review workflow with AI-assisted generation, inline editing/diffing, one-click Qase sync, and live pass/fail status reporting.",
            "Set up authenticated SSE streaming over fetch/ReadableStream and enforced 60%+ test coverage via Vitest/Testing Library with Playwright E2E for complex stateful views.",
          ],
        },
        {
          heading: "Selected AI projects",
          bullets: [
            "AI Customer Service/Sales Agent — deployed at scale, handling hundreds of thousands of monthly requests; drove record client sales and satisfaction gains.",
            "Document AI/OCR pipelines (2 clients) — TypeScript/GCP JSON extraction from legal documents and government IDs with fraud-detection logic; cut processing time by 60%.",
            "Real-time Concierge Agent (Gemini Live API/WebSockets) and a proposal-drafting agent for advertising — tool-calling agents for live event registration and data-driven proposal generation.",
          ],
        },
      ],
      techUsed:
        "Python 3.12, FastAPI, Google ADK, Claude API (Vertex AI), Gemini API, Gemini Live API, OpenAI API, RAG, async SQLAlchemy 2.0, Alembic, PostgreSQL 18, Keycloak/JWT, SSE, Google Cloud Run, GitLab CI/CD, Next.js 16, React 19, TypeScript, Tailwind CSS 4, NextAuth v5, TipTap, Playwright, pytest, Vitest, Qase, Langfuse, OpenTelemetry",
    },
    {
      title: "Full Stack Engineer at Elaniin",
      location: "Remote",
      date: "Apr 2023 - Dec 2024",
      image: ElaniinImage,
      highlights: [
        {
          bullets: [
            "Automated visa/residency application processing for the Salvadoran government, cutting response times for reports, fines, and extensions by 80%.",
            "Developed full stack features with Next.js, Laravel, MySQL, and Docker for a nationwide government system.",
            "Refactored code into reusable components and design patterns, and enforced TDD/DDD methodologies to improve reliability and maintainability.",
          ],
        },
      ],
      techUsed:
        "Next.js, Typescript, PHP, Laravel, MySQL, Docker, Git, GitLab, Tailwind, React Query, Cypress, PHPUnit, Docker Compose",
    },
    {
      title: "Full Stack Engineer at ProGPS",
      location: "Remote",
      date: "Jul 2022 - Apr 2023",
      image: ProGPSImage,
      highlights: [
        {
          bullets: [
            "Delivered custom React.js/Laravel solutions built around specific client business requirements.",
            "Optimized Laravel queries and overall system performance, improving API response times.",
            "Wrote testable, SOLID-compliant code following industry best practices.",
          ],
        },
      ],
      techUsed:
        "React.js, Laravel, MySQL, Git, BitBucket, Docker, Bootstrap, PHPUnit, Jest",
    },
    {
      title: "Jr. Full Stack Engineer at Aura Systems",
      location: "Santiago de los Caballeros",
      date: "Apr 2021 - Jul 2022",
      image: AuraImage,
      highlights: [
        {
          bullets: [
            "Migrated legacy Vue.js 2 components to Vue.js 3 and TypeScript.",
            "Built a Python socket-based desktop application connecting Jackpot machines to computers.",
            "Developed high-performance Laravel API endpoints backing both surfaces.",
          ],
        },
      ],
      techUsed: "Vue 2, Vue 3, JavaScript, TypeScript, Laravel, MySQL, Python, Sockets",
    },
  ];
  return (
    <div
      id="experience"
      className="w-full flex justify-center mt-20 bg-black text-white pb-20"
    >
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

            {/* Summary */}
            {employment.summary && (
              <p className="mt-5 text-sm md:text-base font-medium italic text-stone-200">
                {employment.summary}
              </p>
            )}

            {/* Highlights */}
            {employment.highlights.map((group, groupIndex) => (
              <div
                key={groupIndex}
                className={group.heading ? "mt-6" : "mt-4"}
              >
                {group.heading && (
                  <h4 className="text-sm md:text-base font-semibold text-white">
                    {group.heading}
                  </h4>
                )}
                {group.stack && (
                  <p className="mt-1 text-xs md:text-sm text-stone-400">
                    {group.stack}
                  </p>
                )}
                <ul
                  className={`${
                    group.heading ? "mt-3" : ""
                  } flex flex-col gap-2.5 text-sm md:text-base text-stone-300`}
                >
                  {group.bullets.map((bullet, bulletIndex) => (
                    <li key={bulletIndex} className="flex gap-3">
                      <span
                        aria-hidden="true"
                        className="mt-[0.55em] h-1.5 w-1.5 shrink-0 rounded-full bg-white/40"
                      />
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}

            {/* Tech used */}
            <p className="mt-6 text-sm md:text-base">
              <span className="font-semibold">Technologies used: </span>
              <span className="text-stone-300">{employment.techUsed}</span>
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MyExperience;
