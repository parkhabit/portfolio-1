import Image from "next/image";
import { StaticImageData } from "next/image";

export default function ProjectCard({
  link,
  image,
  alt,
  title,
}: {
  link?: string;
  image: StaticImageData;
  alt: string;
  title?: string;
}) {
  if (!link) {
    return (
      <div className="flex flex-1 bg-[#808080] relative justify-center items-center">
        <div className="bg-[#FFD6E380] absolute w-full h-full" />
        <p>watch this space</p>
      </div>
    );
  }
  return (
    <a
      href={link}
      target="_blank"
      className="flex flex-1 bg-slate-500 justify-center items-center relative"
    >
      <Image src={image} alt={alt} style={{ objectFit: "cover" }} />
      <h3 className="w-full h-full opacity-0 hover:opacity-100 text-black font-semibold italic text-xl absolute flex items-center justify-center">
        {title}
      </h3>
    </a>
  );
}
