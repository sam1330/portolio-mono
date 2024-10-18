import Image from "next/image";
import ElaniinImage from "@/components/Icons/elaniin_logo.jpg"
import ProGPSImage from "@/components/Icons/PROGPS.jpg"
import AuraImage from "@/components/Icons/aura.png"
import React from "react";
import { StaticImport } from "next/dist/shared/lib/get-img-props";

interface IEmployment {
    title: string;
    location: string;
    date: string;
    image: StaticImport | string;
    description: string;
}

const MyExperience = () => {
  const employments: Array<IEmployment> = [
    {
      title: "Full Stack Engineer at Elaniin",
      location: "Remote",
      date: "Apr 2023 - Present",
      image: ElaniinImage,
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    },
    {
      title: "Full Stack Engineer at ProGPS & Technology",
      location: "Remote",
      date: "Jul 2022 - Apr 2023",
      image: ProGPSImage,
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    },
    {
      title: "Full Stack Engineer at Aura Systems",
      location: "Santiago, D.R.",
      date: "Jun 2021 - Jul 2022",
      image: AuraImage,
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    },
  ];
  return (
    <div className="w-full flex justify-center mt-20 bg-black text-white">
      <div className="w-full md:w-3/4 flex flex-col d-inline-block text-center items-center">
        <h1 className="mt-10 mb-10 text-6xl font-light leading-[5rem]">
          My <span className="font-semibold">Experience</span>
        </h1>

        {employments.map((employment, index) => (
          <div
            key={index}
            className="border-[1px] border-white/[0.3] rounded w-full px-9 py-10 text-left mb-4"
          >
            <div className="flex flex-row justify-between">
              {/* // Company logo */}
              <div className="flex flex-row gap-8 items-center h-[50px]">
                <Image src={employment.image} alt={"Elaniin"} width={50} height={50} />
                <h3 className="font-semibold text-2xl">{employment.title}</h3>{"-"}
                <h3 className="text-xl text-stone-300">{employment.location}</h3>
              </div>

              {/* // Date */}
              <h3 className="text-xl flex items-center h-[50px] text-stone-300">{employment.date}</h3>
            </div>

            {/* // Description */}
            <p className="mt-4 text-stone-300">{employment.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MyExperience;
