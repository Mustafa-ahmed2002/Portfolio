import Image from "next/image";
import MainSection from "./components/MainSection";
import Navbar from "./components/Navbar";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Email from "./components/Email";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-[#121212]">
      <Navbar />
      <div className="container mx-auto py-20 px-12">
        <MainSection />
        <About />
        <Skills />
        <Projects />
        <Email />
      </div>
    </main>
  );
}
