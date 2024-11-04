export default function Home() {
  return (
    <div className="bg-[#FFD6E3] flex flex-1 flex-col p-3">
      <header className="flex flex-row justify-between sticky top-0 p-1">
        <p className="text-sm">
          Kitty Allen. Frontend Software Engineer, Sydney.
        </p>
        <p className="text-sm">K—A</p>
      </header>
      <main className="pt-8">
        <h1>Kitty Allen — Frontend Software Engineer, Sydney.</h1>

        <div className="grid grid-cols-3 gap-4 relative mt-20">
          <div></div>
          <p className="flex justify-end items-end">Personal work. ↴</p>

          <div className="flex flex-col">
            <a>email</a>
            <a>linkedin</a>
            <a>github</a>
          </div>
        </div>

        <div className="grid grid-cols-3 gap-4 relative mt-2">
          <div className="bg-[#FFD6E380] absolute w-full h-full" />

          <div className="flex flex-1 bg-slate-500 h-80"></div>
          <div className="flex flex-1 bg-slate-500"></div>
          <div className="flex flex-1 bg-slate-500"></div>

          <div className="flex flex-1 bg-slate-500 h-80"></div>
          <div className="flex flex-1 bg-slate-500"></div>
          <div className="flex flex-1 bg-slate-500"></div>

          <div className="flex flex-1 bg-slate-500 h-80"></div>
          <div className="flex flex-1 bg-slate-500"></div>
          <div className="flex flex-1 bg-slate-500"></div>

          <div className="flex flex-1 bg-slate-500 h-80"></div>
          <div className="flex flex-1 bg-slate-500"></div>
          <div className="flex flex-1 bg-slate-500"></div>
        </div>
      </main>
      <footer className="">
        {/* TODO:  Ability to scroll to the top of the page */}
      </footer>
    </div>
  );
}
