import Image from "next/image";
import React from "react";
import GasRD from "@/components/Icons/Gasolina RD.png";
import CarWorkshop from "@/components/Icons/Car workshop.png";
import CVEnhance from "@/components/Icons/CvEnhance.png";

const Projects = () => {
  return (
    <div
      id="projects"
      className="w-full flex justify-center mt-20 bg-black text-white pb-20 px-5 md:px-0"
    >
      <div className="w-full md:w-full flex flex-col d-inline-block items-center">
        <h1 className="mt-10 md:mb-10 text-6xl font-light leading-[5rem]">
          My <span className="font-semibold">Projects</span>
        </h1>

        {/* PROJECT 1 */}
        <div className="w-full h-full min-h-[600px] md:w-3/4 flex flex-col md:flex-row justify-between relative pt-10 md:pt-[100px]">
          <div className="d-inline-block md:w-[40%] md:h-[400px] rounded-lg">
            <Image
              src={CVEnhance}
              alt="CVEnhance"
              className="rounded-lg w-full h-full"
              width={700}
              height={400}
            />
          </div>
          <div className="w-full md:w-[50%]">
            <h1 className="md:mt-10 text-6xl font-light leading-[5rem] mb-10">
              CvEnhance
            </h1>
            <p className=" text-stone-500 mb-7 text-lg">
              This is a very powerful project. It is a web application that
              allows you to upload your CV, analyze it and get a AI
              recommendations on how to enhance your CV for a job offer that you
              can also upload.
              <br />
              <br />
              In this project I used Next.js, Typescript, Tailwind, Node Js,
              JWT, OpenAI API, and PostgreSQL.
            </p>
          </div>
        </div>
        {/* PROJECT 2 */}
        <div className="w-full h-full min-h-[600px] md:w-3/4 flex flex-col-reverse md:flex-row justify-between relative pt-[100px]">
          <div className="w-full md:w-[50%]">
            <h1 className="md:mt-10 text-6xl font-light leading-[5rem] mb-10">
              Gasolina RD
            </h1>
            <p className=" text-stone-500 mb-7 text-lg">
              This is a simple but very useful project. It is a web application
              which allows you to find fuel stations that comply with
              international regulations, since in the Dominican Republic there
              is corruption with the stations and it is necessary to know which
              ones sell good fuel to avoid damaging your vehicle. You can filter
              by fuel type, province or city and stations directly. Also you can
              see the results of tests done by the government.
              <br />
              <br />
              In this project I used Next.js, Typescript, Tailwind, Node Js,
              MySQL and GraphQL.
            </p>
          </div>
          <div className="d-inline-block  md:w-[40%] md:h-[400px] rounded-lg">
            <Image
              src={GasRD}
              alt="Gasolina RD"
              className="rounded-lg w-full h-full"
              width={700}
              height={400}
            />
          </div>
        </div>
        {/* PROJECT 3 */}
        <div className="w-full h-full min-h-[600px] md:w-3/4 flex flex-col md:flex-row justify-between relative pt-[80px]">
          <div className="d-inline-block md:w-[40%] md:h-[400px] rounded-lg">
            <Image
              src={CarWorkshop}
              alt="Car Workshop POS"
              className="rounded-lg w-full h-full"
              width={700}
              height={400}
            />
          </div>
          <div className="w-full md:w-[50%]">
            <h1 className="md:mt-10 text-6xl font-light leading-[5rem] mb-10">
              Point of sale
            </h1>
            <p className=" text-stone-500 mb-7 text-lg">
              This is a point of sale for a car workshop. It is a web
              application which allows you to manage the inventory, sales,
              employees and more of the workshop, you can also see the reports
              of the sales and the inventory. It also has integration tests with
              Cypress and PHPUnit to ensure the quality of the code and the app
              is fully dockerized.
              <br />
              <br />
              In this project I used Laravel, Blade, MySQL, Bootstrap, Cypress,
              PHPUnit and Docker.
            </p>
          </div>
        </div>

        <div>
          <h2 className="text-xl font-semibold mt-10">
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
