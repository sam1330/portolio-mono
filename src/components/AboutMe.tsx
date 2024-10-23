import MeIcon from "./Icons/MeIcon";

const AboutMe = () => {
  return (
    <div className="w-full h-screen min-h-[700px] flex justify-center md:h-4/5 items-center ">
      <div className="w-full h-full min-h-[700px] md:w-3/4 flex flex-col md:flex-row justify-between relative pt-[100px]">
        <div className="d-inline-block">
          <MeIcon />
        </div>
        <div className="w-full md:w-[55%]">
          <h1 className="mt-10 text-6xl font-light leading-[5rem] mb-10">
            About <span className="font-semibold">Me</span>
          </h1>
          <p className=" text-stone-500 mb-7">
            I&apos;m a Full Stack Web developer with experience working with
            React and Vue.js creating beautiful and optimized web applications.
            proficient in working with Laravel designing and developing API
            endpoints and procedures. I love solving complex problems as well as
            contributing to open-source projects. I am a team player, a tech
            lover, a fast learner, a responsible person, and committed to
            success and improvement.
          </p>
          <p className=" text-stone-500 mb-7">
            I am very enthusiastic about bringing the technical and visual
            aspects of digital products to life. User experience, pixel perfect
            design, and writing clear, readable, highly performant code matters
            to me.
          </p>
          <p className=" text-stone-500">
            I implement unit and integration tests to ensure the quality of the
            code. I also use methodologies and good practices such as SOLID,
            DDD, TDD, and Clean Architecture. I am always looking for new and
            challenging projects that help me grow and develop my skills.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
