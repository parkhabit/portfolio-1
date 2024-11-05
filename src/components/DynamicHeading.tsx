export default function DynamicHeading() {
  return (
    <div className="flex flex-row items-center">
      <p className="text-xs pr-1">Kitty Allen.</p>

      <span className="font-mono text-xs overflow-hidden whitespace-nowrap inline-block relative animate-typewriter1 after:content-['|'] after:absolute after:right-0 after:animate-caret">
        Frontend Software Engineer
      </span>
      <span className="font-mono text-xs overflow-hidden whitespace-nowrap inline-block relative animate-typewriter2 after:content-['|'] after:absolute after:right-0 after:animate-caret">
        Accessibility advocate
      </span>
      <span className="font-mono text-xs overflow-hidden whitespace-nowrap inline-block relative animate-typewriter3 after:content-['|'] after:absolute after:right-0 after:animate-caret">
        Design systems enthusiast
      </span>

      <p className="text-xs pl-1">Sydney.</p>
    </div>
  );
}
