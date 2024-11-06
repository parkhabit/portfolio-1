import type { Metadata } from "next";
import ProjectCard from "../components/ProjectCard";
import DynamicHeading from "../components/DynamicHeading";
import headspacePic from "../../public/images/headspace.png";

export const metadata: Metadata = {
  title: "Kitty Allen",
  description: "Portfolio website for Kitty Allen",
};

export default function Home() {
  return (
    <div className="flex flex-1 flex-col p-3 h-[100%]">
      <header className="flex flex-row justify-between sticky top-0 p-1">
        <DynamicHeading />
        <p className="text-sm">K—A</p>
      </header>
      <main className="pt-8">
        <h1>Kitty Allen — Frontend Software Engineer, Sydney.</h1>

        <div className="mt-20 gap-4 md:flex md:flex-row-reverse md:justify-between">
          <div className="flex flex-col md:flex-1">
            <a href="mailto: k.allen91@gmail.com">email</a>
            <a href="https://www.linkedin.com/in/kitty-allen/">linkedin</a>
            <a href="https://github.com/parkhabit">github</a>
          </div>
          <p className="mt-10 md:flex md:flex-1">Personal work. ↴</p>
          <div className="md:flex md:flex-1"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 relative mt-2">
          <ProjectCard
            link="https://github.com/parkhabit/headspace"
            image={headspacePic}
            alt="Screenshot of headspace project"
          />
          <ProjectCard link="" image={headspacePic} alt="" />
          <ProjectCard link="" image={headspacePic} alt="" />
        </div>
        <div className="md:grid md:grid-cols-3">
          <div />

          <div>
            <h2 className="pt-16 pb-16">Work history</h2>
          </div>
          <div className="md:pt-40">
            <p className="font-mono text-xs">Aug 2023 - Jun 2024</p>
            <p>eMed, London - Software Engineer</p>
            <p className="font-mono text-xs pt-2">Jan 2021 - Aug 2023 </p>
            <p>Babylon, London - Software Engineer</p>
            <p className="font-mono text-xs pt-2">Apr 2019 - Jan 2021</p>
            <p>Reed.co.uk, London - Software development engineer</p>
            <p className="font-mono text-xs pt-2">Apr 2018 - Jan 2019</p>
            <p>Reed.co.uk, London - Junior Frontend Developer</p>
            <p className="font-mono text-xs pt-2">Mar 2018 - Apr 2018</p>
            <p>DWYL, London - Junior Frontend Developer</p>

            <h3 className="font-mono pt-8">Education</h3>
            <p>Founders & Coders fullstack development course</p>
            <p>BA Hons 2:1 University of Sydney</p>
          </div>
        </div>
      </main>
      <footer className="">
        {/* TODO:  Ability to scroll to the top of the page */}
      </footer>
    </div>
  );
}
