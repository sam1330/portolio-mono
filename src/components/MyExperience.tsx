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
      title: "Full Stack Engineer at Elaniin",
      location: "Remote",
      date: "Apr 2023 - Present",
      image: ElaniinImage,
      description:
        "I work developing full stack features, primarily using Next.js, Laravel, MySQL, and Docker. I contributed to the development of a significant system for the government of El Salvador, automating processes to prepare reports, fines, and extensions, reducing the response and processing time of visa and residency applications by 80%. Additionally, I refactor and build high-quality, reusable components, implementing design patterns and best practices to expedite development time. My work also involve implementing TDD and DDD methodologies, while documenting every endpoint and component to ensure clarity in the development and maintenance processes.",
      techUsed:
        "Next.js, Typescript, PHP, Laravel, MySQL, Docker, Git, GitLab, Tailwind, React Query, Cypress, PHPUnit, Docker Compose",
    },
    {
      title: "Full Stack Engineer at ProGPS & Technology",
      location: "Remote",
      date: "Jul 2022 - Apr 2023",
      image: ProGPSImage,
      description:
        "I worked with React.js, Laravel and MySQL to develop new features, fix bugs, and write tests for both existing and new code. I developed new core functionalities such as POS and inventory systems, which expanded the software’s capabilities and helped attract new clients, resulting in a 40% increase in sales. Additionally, I optimized legacy Laravel queries and enhanced the application's overall performance, improving API response times.",
      techUsed:
        "React.js, Laravel, MySQL, Git, BitBucket, Docker, Bootstrap, PHPUnit, Jest",
    },
    {
      title: "Jr. Full Stack Engineer at Aura Systems",
      location: "Santiago, D.R.",
      date: "Jun 2021 - Jul 2022",
      image: AuraImage,
      description:
        "I worked with Vue, Laravel and MySQL. I created a component library with Vue 3 and TypeScript, which accelerated development time by up to 60%. Additionally, I developed a desktop application and implemented a routine to enable communication between Jackpot machines and computers via sockets using Python.",
      techUsed:
        "Vue 2, Vue 3, Javascript, Typescript, Laravel, MySQL, Python, Socket.IO, Pusher, Electron",
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
