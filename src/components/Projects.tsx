import Image from "next/image";
import React from "react";
import GasRD from "@/components/Icons/Gasolina RD.png";
import CarWorkshop from "@/components/Icons/Car workshop.png";
import CVEnhance from "@/components/Icons/CvEnhance.png";
import Traveler from "@/components/Icons/traveler.png";

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

        {/* PROJECT: HAKU AI */}
        <div className="w-full h-full min-h-[600px] md:w-3/4 flex flex-col md:flex-row justify-between relative pt-10 md:pt-[100px]">
          <div className="d-inline-block md:w-[40%] md:h-[400px] rounded-lg bg-gradient-to-br from-blue-600 to-blue-900 flex items-center justify-center">
            <div className="text-center">
              <p className="text-white text-5xl font-bold">HAKU</p>
              <p className="text-blue-200 text-lg mt-2">AI</p>
            </div>
          </div>
          <div className="w-full md:w-[50%]">
            <h1 className="lg:mt-10 text-6xl font-light leading-[5rem] mb-10">
              Haku AI
            </h1>
            <p className=" text-stone-500 mb-7 text-lg">
              A cutting-edge AI platform designed to deliver intelligent
              solutions for modern businesses. Haku AI leverages generative AI
              to automate complex workflows, provide intelligent insights, and
              enhance customer experiences at scale.
              <br />
              <br />
              Key features include custom AI agents, document processing,
              intelligent chatbots, and data extraction pipelines. Built with
              enterprise-grade architecture for reliability and scalability.
              <br />
              <br />
              In this project I used Next.js, TypeScript, Gemini API, Vertex
              AI, Google Cloud, Python, LangChain, and RAG architectures.
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

        {/* PROJECT 2 */}
        <div className="w-full h-full min-h-[600px] md:w-3/4 flex flex-col-reverse md:flex-row justify-between relative pt-[100px]">
          <div className="w-full md:w-[50%]">
            <h1 className="lg:mt-10 text-6xl font-light leading-[5rem] mb-10">
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
            <a
              href="https://github.com/sam1330"
              target="_blank"
              className="inline-block mt-4 px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
            >
              View on GitHub →
            </a>
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
            <h1 className="lg:mt-10 text-6xl font-light leading-[5rem] mb-10">
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
            <a
              href="https://github.com/sam1330"
              target="_blank"
              className="inline-block mt-4 px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
            >
              View on GitHub →
            </a>
          </div>
        </div>

        {/* PROJECT 4 */}
        <div className="w-full h-full min-h-[600px] md:w-3/4 flex flex-col-reverse md:flex-row justify-between relative pt-[100px]">
          <div className="w-full md:w-[50%]">
            <h1 className="lg:mt-10 text-6xl font-light leading-[5rem] mb-10">
              Traveler
            </h1>
            <p className=" text-stone-500 mb-7 text-lg">
              This project is made for when you are on a trip and want to look
              for places to visit. It is a web application that allows you to
              find places to visit anywhere in the world, you can filter by type
              of place and rating. As long as is in the map viewport, it will
              look for places and you can see information about the places such
              as price range, type of place, and rating.
              <br />
              <br />
              In this project I used React.js, Axios, Material UI, Node Js,
              Google Maps and trip advisor API.
            </p>
            <a
              href="https://github.com/sam1330"
              target="_blank"
              className="inline-block mt-4 px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
            >
              View on GitHub →
            </a>
          </div>
          <div className="d-inline-block  md:w-[40%] md:h-[400px] rounded-lg">
            <Image
              src={Traveler}
              alt="Traveler"
              className="rounded-lg w-full h-full"
              width={700}
              height={400}
            />
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
