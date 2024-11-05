import ProjectCard from "../components/ProjectCard";
import headspacePic from "../../public/images/headspace.png";

export default function Home() {
  return (
    <div className="bg-[#FFD6E3] flex flex-1 flex-col p-3 h-[100%]">
      <header className="flex flex-row justify-between sticky top-0 p-1">
        <p className="text-sm">
          Kitty Allen. Frontend Software Engineer, Sydney.
        </p>
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
      </main>
      <footer className="">
        {/* TODO:  Ability to scroll to the top of the page */}
      </footer>
    </div>
  );
}
