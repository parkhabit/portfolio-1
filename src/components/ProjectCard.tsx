import Image from "next/image";
import { StaticImageData } from "next/image";

export default function ProjectCard({
  link,
  image,
  alt,
}: {
  link?: string;
  image: StaticImageData;
  alt: string;
}) {
  if (!link) {
    return (
      <div className="flex flex-1 bg-[#808080] relative max-h-52 mx-w-40">
        <div className="bg-[#FFD6E380] absolute w-full h-full" />
        <p>watch this space</p>
      </div>
    );
  }
  return (
    <a href={link} target="_blank" className="flex flex-1 bg-slate-500">
      <Image src={image} alt={alt} style={{ objectFit: "cover" }} />
    </a>
  );
}
