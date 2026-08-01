import CssIcon from "./Icons/CssIcon";
import DockerIcon from "./Icons/DockerIcon";
import GitIcon from "./Icons/GitIcon";
import HtmlIcon from "./Icons/HtmlIcon";
import JSIcon from "./Icons/JSIcon";
import NodeIcon from "./Icons/NodeIcon";
import OpenAIIcon from "./Icons/OpenAIIcon";
import PostgreSQLIcon from "./Icons/PostgreSQLIcon";
import ReactIcon from "./Icons/ReactIcon";
import TailwindIcon from "./Icons/TailwindIcon";
import TSIcon from "./Icons/TSIcon";
import GeminiIcon from "./Icons/GeminiIcon";
import GoogleCloudIcon from "./Icons/GoogleCloudIcon";
import PythonIcon from "./Icons/PythonIcon";
import NextJsIcon from "./Icons/NextJsIcon";
import NestJsIcon from "./Icons/NestJsIcon";
import ClaudeIcon from "./Icons/ClaudeIcon";
import LangChainIcon from "./Icons/LangChainIcon";
import PrismaIcon from "./Icons/PrismaIcon";

const skills = [
  {
    title: "Claude (Vertex AI)",
    node: <ClaudeIcon />,
    href: "https://www.anthropic.com/claude",
  },
  {
    title: "Gemini API",
    node: <GeminiIcon />,
    href: "https://ai.google.dev/",
  },
  {
    title: "OpenAI API",
    node: <OpenAIIcon />,
    href: "https://openai.com/es-ES/api/",
  },
  {
    title: "LangChain",
    node: <LangChainIcon />,
    href: "https://www.langchain.com/",
  },
  {
    title: "Google Cloud",
    node: <GoogleCloudIcon />,
    href: "https://cloud.google.com/",
  },
  {
    title: "Python",
    node: <PythonIcon />,
    href: "https://www.python.org/",
  },
  {
    title: "TypeScript",
    node: <TSIcon />,
    href: "https://www.typescriptlang.org/",
  },
  {
    title: "JavaScript",
    node: <JSIcon />,
    href: "https://developer.mozilla.org/es/docs/Web/JavaScript",
  },
  {
    title: "Next.js",
    node: <NextJsIcon />,
    href: "https://nextjs.org/",
  },
  {
    title: "NestJS",
    node: <NestJsIcon />,
    href: "https://nestjs.com/",
  },
  {
    title: "React",
    node: <ReactIcon />,
    href: "https://react.dev/",
  },
  {
    title: "Node js",
    node: <NodeIcon />,
    href: "https://nodejs.org/en/",
  },
  {
    title: "PostgreSQL",
    node: <PostgreSQLIcon />,
    href: "https://www.postgresql.org/",
  },
  {
    title: "Prisma",
    node: <PrismaIcon />,
    href: "https://www.prisma.io/",
  },
  {
    title: "Docker",
    node: <DockerIcon />,
    href: "https://www.docker.com/",
  },
  {
    title: "Git",
    node: <GitIcon />,
    href: "https://git-scm.com/",
  },
  {
    title: "Tailwind",
    node: <TailwindIcon />,
    href: "https://tailwindcss.com/",
  },
  {
    title: "HTML",
    node: <HtmlIcon />,
    href: "https://developer.mozilla.org/es/docs/Web/HTML",
  },
  {
    title: "CSS",
    node: <CssIcon />,
    href: "https://developer.mozilla.org/es/docs/Web/CSS",
  },
];

const MySkills = () => {
  return (
    <div id="skills" className="w-full flex justify-center">
      <div className="w-full md:w-3/4 flex flex-col d-inline-block text-center items-center">
        <h1 className="mt-10 text-6xl font-light leading-[5rem]">
          Main <span className="font-semibold">Skills</span>
        </h1>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6 mt-[80px] w-full md:max-w-[1330px] px-5 md:px-0">
          {skills.map((skill) => (
            <a
              key={skill.title}
              href={skill.href}
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-col items-center justify-center gap-3 border border-black/10 rounded-lg p-6 hover:border-black/30 hover:bg-black/[0.03] transition"
            >
              <div className="text-black [&>svg]:w-10 [&>svg]:h-10">
                {skill.node}
              </div>
              <p className="text-sm md:text-base text-stone-600 text-center">
                {skill.title}
              </p>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};
export default MySkills;
