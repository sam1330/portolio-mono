import CssIcon from "./Icons/CssIcon";
import GitIcon from "./Icons/GitIcon";
import HtmlIcon from "./Icons/HtmlIcon";
import JSIcon from "./Icons/JSIcon";
import LaravelIcon from "./Icons/LaravelIcon";
import NodeIcon from "./Icons/NodeIcon";
import PhpIcon from "./Icons/PhpIcon";
import ReactIcon from "./Icons/ReactIcon";
import TailwindIcon from "./Icons/TailwindIcon";
import TSIcon from "./Icons/TSIcon";

const skills = [
  {
    name: "Git",
    icon: <GitIcon />,
  },
  {
    name: "JavaScript",
    icon: <JSIcon />,
  },
  {
    name: "TypeScript",
    icon: <TSIcon />,
  },
  {
    name: "React",
    icon: <ReactIcon />,
  },
  {
    name: "PHP",
    icon: <PhpIcon />,
  },
  {
    name: "Laravel",
    icon: <LaravelIcon />,
  },
  {
    name: "MySQL",
    icon: <NodeIcon />,
  },
  {
    name: "Node js",
    icon: <NodeIcon />,
  },
  {
    name: "HTML",
    icon: <HtmlIcon />,
  },
  {
    name: "CSS",
    icon: <CssIcon />,
  },
  {
    name: "Tailwind",
    icon: <TailwindIcon />,
  },
  {
    name: "Vue js",
    icon: <TailwindIcon />,
  },
];

const MySkills = () => {
  return (
    <div className="w-full flex justify-center">
      <div className="w-full md:w-3/4 flex flex-col d-inline-block text-center items-center">
        <h1 className="mt-10 text-6xl font-light leading-[5rem]">
          Main <span className="font-semibold">Skills</span>
        </h1>
        <div className="flex flex-row flex-wrap gap-10 mt-[100px] w-full md:max-w-[1330px]">
          {skills.map((skill, index) => (
            <div
              key={index}
              className="font-semibold border-4 border-black rounded w-[186px] h-[186px] flex flex-col justify-center items-center gap-7"
            >
              {skill.icon}
              <p className="text-3xl text-center">{skill.name}</p>
            </div>
          ))}
          {/* <div className="font-semibold border-4 border-black rounded w-[230px] h-[230px]">
                    <GitIcon />
                </div>
                <div className="font-semibold border-4 border-black rounded w-[230px] h-[230px]"></div>
                <div className="font-semibold border-4 border-black rounded w-[230px] h-[230px]"></div>
                <div className="font-semibold border-4 border-black rounded w-[230px] h-[230px]"></div>
                <div className="font-semibold border-4 border-black rounded w-[230px] h-[230px]"></div> */}
        </div>
      </div>
    </div>
  );
};
export default MySkills;
