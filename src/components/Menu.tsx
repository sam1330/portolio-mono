import PillNav from "./Animated/PillNav";
import DownloadIcon from "./Icons/DownloadIcon";

const Menu = () => {
  return (
    <div className="w-full justify-center h-screen md:h-24 items-center hidden md:flex">
      <div className="w-full md:w-3/4 flex gap-10 justify-between items-center flex-col md:flex-row">
        <div className="d-inline-block text-lg font-semibold">
          <PillNav
            items={[
              { label: "Skills", href: "#skills" },
              { label: "Experience", href: "#experience" },
              { label: "About me", href: "#about-me" },
              { label: "Projects", href: "#projects" },
            ]}
            activeHref="/"
            className="custom-nav"
            ease="power2.easeOut"
            baseColor="#000000"
            pillColor="#ffffff"
            hoveredPillTextColor="#ffffff"
            pillTextColor="#000000"
          />
          {/* <ul className="flex gap-6 flex-col md:flex-row">
            <li>
              <a href="#skills" className="text-black hover:text-gray-800">
                Skills
              </a>
            </li>
            <li>
              <a href="#experience" className="text-black hover:text-gray-800">
                Experience
              </a>
            </li>
            <li>
              <a href="#about-me" className="text-black hover:text-gray-800">
                About me
              </a>
            </li>
            <li>
              <a href="#projects" className="text-black hover:text-gray-800">
                Projects
              </a>
            </li>
          </ul> */}
        </div>

        <a
          href="https://sam1330.github.io/portolio-mono/assets/Samuel Martinez - Full Stack Developer.pdf"
          download="Samuel Martinez Resume"
          className="bg-black hover:bg-gray-800 text-white font-semibold  py-2 px-4 rounded flex gap-2 items-center"
        >
          Resume <DownloadIcon />
        </a>
      </div>
    </div>
  );
};

export default Menu;
