import LogoLoop from "./Animated/LogoLoop";
import CssIcon from "./Icons/CssIcon";
import DockerIcon from "./Icons/DockerIcon";
import GitIcon from "./Icons/GitIcon";
import HtmlIcon from "./Icons/HtmlIcon";
import JSIcon from "./Icons/JSIcon";
import LaravelIcon from "./Icons/LaravelIcon";
import MySQLIcon from "./Icons/MySQLIcon";
import NodeIcon from "./Icons/NodeIcon";
import OpenAIIcon from "./Icons/OpenAIIcon";
import PhpIcon from "./Icons/PhpIcon";
import PostgreSQLIcon from "./Icons/PostgreSQLIcon";
import ReactIcon from "./Icons/ReactIcon";
import TailwindIcon from "./Icons/TailwindIcon";
import TSIcon from "./Icons/TSIcon";

const skills = [
  {
    title: "Git",
    node: <GitIcon />,
    href: "https://git-scm.com/",
  },
  {
    title: "JavaScript",
    node: <JSIcon />,
    href: "https://developer.mozilla.org/es/docs/Web/JavaScript",
  },
  {
    title: "TypeScript",
    node: <TSIcon />,
    href: "https://www.typescriptlang.org/",
  },
  {
    title: "React",
    node: <ReactIcon />,
    href: "https://react.dev/",
  },
  {
    title: "PHP",
    node: <PhpIcon />,
    href: "https://www.php.net/",
  },
  {
    title: "Laravel",
    node: <LaravelIcon />,
    href: "https://laravel.com/",
  },
  {
    title: "MySQL",
    node: <MySQLIcon />,
    href: "https://www.mysql.com/",
  },
  {
    title: "PostgreSQL",
    node: <PostgreSQLIcon />,
    href: "https://www.postgresql.org/",
  },
  {
    title: "Node js",
    node: <NodeIcon />,
    href: "https://nodejs.org/en/",
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
  {
    title: "Tailwind",
    node: <TailwindIcon />,
    href: "https://tailwindcss.com/",
  },
  {
    title: "Docker",
    node: <DockerIcon />,
    href: "https://www.docker.com/",
  },
  {
    title: "OpenAI API",
    node: <OpenAIIcon />,
    href: "https://openai.com/es-ES/api/",
  },
];

const MySkills = () => {
  return (
    <div id="skills" className="w-full flex justify-center">
      <div className="w-full md:w-3/4 flex flex-col d-inline-block text-center items-center">
        <h1 className="mt-10 text-6xl font-light leading-[5rem]">
          Main <span className="font-semibold">Skills</span>
        </h1>
        <div className="flex flex-row flex-wrap justify-center gap-10 mt-[100px] w-full md:max-w-[1330px]">
          <LogoLoop
            logos={skills}
            speed={120}
            direction="left"
            logoHeight={58}
            gap={40}
            pauseOnHover
            scaleOnHover
            fadeOut
            fadeOutColor="#ffffff"
            ariaLabel="Technology partners"
          />
          {/* {skills.map((skill, index) => (
            <div
              key={index}
              className="font-semibold border-4 border-black rounded w-[186px] h-[186px] flex flex-col justify-center items-center gap-7"
            >
              {skill.icon}
              <p className="text-3xl text-center">{skill.name}</p>
            </div>
          ))} */}
        </div>
      </div>
    </div>
  );
};
export default MySkills;
