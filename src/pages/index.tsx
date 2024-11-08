import AboutMe from "@/components/AboutMe";
import Hero from "@/components/Hero";
import Menu from "@/components/Menu";
import MyExperience from "@/components/MyExperience";
import MySkills from "@/components/MySkills";
import Projects from "@/components/Projects";

export default function Home() {
  return (
    <div className="w-full h-screen">
      <Menu />
      <Hero />
      <MySkills />
      <MyExperience />
      <AboutMe />
      <Projects />
    </div>
  );
}
