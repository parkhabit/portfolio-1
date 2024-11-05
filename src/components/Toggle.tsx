export default function Toggle({
  onClick,
  checked,
}: {
  onClick: () => void;
  checked: boolean;
}) {
  return (
    <div className="p-4 fixed left-0 bottom-0 z-20">
      <label
        htmlFor="check"
        className="flex bg-[#26211E] has-[:checked]:bg-[#FFD6E3] cursor-pointer relative w-14 h-8 rounded-full"
      >
        <input
          type="checkbox"
          id="check"
          className="sr-only peer"
          checked={checked}
          onChange={onClick}
        />
        <span className="w-2/5 h-[70%] bg-[#FFD6E3] absolute rounded-full left-1 top-1 peer-checked:bg-[#26211E] peer-checked:left-7 transition-all duration-500" />
      </label>
    </div>
  );
}
