import Hero from "@/components/Hero";
import Menu from "@/components/Menu";
import MySkills from "@/components/MySkills";

export default function Home() {
  return (
    <div className="w-full h-screen">
      <Menu />
      <Hero />
      <MySkills />
    </div>
  );
}
