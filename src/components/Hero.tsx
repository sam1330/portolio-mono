import Banner from "./Icons/Banner";

const Hero = () => {
  return (
    <div className="w-full h-screen min-h-[700px] flex justify-center md:h-4/5 items-center ">
      <div className="w-full h-full min-h-[700px] md:w-3/4 flex flex-col md:flex-row justify-between items-center relative">
        <p className="text-6xl font-light w-full md:w-1/2 leading-[5rem]">
          Hello! I am <span className="font-extrabold">Samuel</span>.<br />
          <span className="font-extrabold">Full Stack</span> Engineer <br />Based in{" "}
          <span className="font-extrabold">LATAM</span>.
        </p>
        <div className="d-inline-block absolute right-0 top-10">
            <Banner />
        </div>
      </div>
    </div>
  );
};

export default Hero;
