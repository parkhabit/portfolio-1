export default function DynamicHeading() {
  return (
    <div className="flex flex-col">
      <p className="text-sm flex">
        Kitty Allen.
        <span className="font-mono overflow-hidden whitespace-nowrap inline-block relative animate-typewriter1 after:content-['|'] after:absolute after:right-0 after:animate-caret">
          Frontend Software Engineer
        </span>
        <span className="font-mono overflow-hidden whitespace-nowrap inline-block relative animate-typewriter2 after:content-['|'] after:absolute after:right-0 after:animate-caret">
          Accessibility advocate
        </span>
        <span className="font-mono overflow-hidden whitespace-nowrap inline-block relative animate-typewriter3 after:content-['|'] after:absolute after:right-0 after:animate-caret">
          Design systems enthusiast
        </span>
      </p>
      <p className="text-sm">Sydney.</p>
    </div>
  );
}
