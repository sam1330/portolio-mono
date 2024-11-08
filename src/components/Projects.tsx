import Image from "next/image";
import React from "react";
import GasRD from "@/components/Icons/Gasolina RD.png"
import Traveler from "@/components/Icons/traveler.png"
import CarWorkshop from "@/components/Icons/Car workshop.png"

const Projects = () => {
  return (
    <div className="w-full flex justify-center mt-20 bg-black text-white pb-20">
      <div className="w-full md:w-full flex flex-col d-inline-block items-center">
        <h1 className="mt-10 mb-10 text-6xl font-light leading-[5rem]">
          My <span className="font-semibold">Projects</span>
        </h1>

        {/* PROJECT 1 */}
        <div className="w-full h-full min-h-[600px] md:w-3/4 flex flex-col md:flex-row justify-between relative pt-[100px]">
          <div className="d-inline-block w-[40%] h-[400px] rounded-lg">
            <Image
              src={GasRD}
              alt="Gasolina RD"
              className="rounded-lg w-full h-full"
              width={700}
              height={400}
            />
          </div>
          <div className="w-full md:w-[50%]">
            <h1 className="mt-10 text-6xl font-light leading-[5rem] mb-10">
              Gasolina RD
            </h1>
            <p className=" text-stone-500 mb-7 text-lg">
              This is a simple but very useful project. It is a web application
              which allows you to find fuel stations that comply with
              international regulations, since in the Dominican Republic there
              is corruption with the stations and it is necessary to know which
              ones sell good fuel to avoid damaging your vehicle. You can filter
              by fuel type, province or city and stations directly. Also you can
              see the results of tests done by the govDFernment
              <br />
              <br />
              In this project I used Next.js, Typescript, Tailwind, Node Js,
              MySQL and GraphQL.
            </p>
          </div>
        </div>
        {/* PROJECT 2 */}
        <div className="w-full h-full min-h-[600px] md:w-3/4 flex flex-col md:flex-row justify-between relative">
          <div className="w-full md:w-[50%]">
            <h1 className="mt-10 text-6xl font-light leading-[5rem] mb-10">
              Traveler
            </h1>
            <p className=" text-stone-500 mb-7 text-lg">
              This is a simple but very useful project. It is a web application
              which allows you to find fuel stations that comply with
              international regulations, since in the Dominican Republic there
              is corruption with the stations and it is necessary to know which
              ones sell good fuel to avoid damaging your vehicle. You can filter
              by fuel type, province or city and stations directly. Also you can
              see the results of tests done by the govDFernment
              <br />
              <br />
              In this project I used Next.js, Typescript, Tailwind, Node Js,
              MySQl and GraphQL.
            </p>
          </div>
          <div className="d-inline-block w-[40%] h-[400px] rounded-lg">
            <Image
              src={Traveler}
              alt="Traveler"
              className="rounded-lg w-full h-full"
              width={700}
              height={400}
            />
          </div>
        </div>
        {/* PROJECT 3 */}
        <div className="w-full h-full min-h-[600px] md:w-3/4 flex flex-col md:flex-row justify-between relative">
          <div className="d-inline-block w-[40%] h-[400px] rounded-lg">
            <Image
              src={CarWorkshop}
              alt="Car Workshop POS"
              className="rounded-lg w-full h-full"
              width={700}
              height={400}
            />
          </div>
          <div className="w-full md:w-[50%]">
            <h1 className="mt-10 text-6xl font-light leading-[5rem] mb-10">
              Point of sale
            </h1>
            <p className=" text-stone-500 mb-7 text-lg">
              This is a simple but very useful project. It is a web application
              which allows you to find fuel stations that comply with
              international regulations, since in the Dominican Republic there
              is corruption with the stations and it is necessary to know which
              ones sell good fuel to avoid damaging your vehicle. You can filter
              by fuel type, province or city and stations directly. Also you can
              see the results of tests done by the govDFernment
              <br />
              <br />
              In this project I used Next.js, Typescript, Tailwind, Node Js,
              MySQL and GraphQL.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
