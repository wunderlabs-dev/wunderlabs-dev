import Image from "next/image";

import type { HomePageAppImageProps } from "./types";

import copy from "@/copy/en.json";

const HomePageAppImage = ({ src }: HomePageAppImageProps) => {
  return (
    <Image
      src={src}
      alt={copy.site.label}
      sizes="(min-width: 1080px) 1080px, 100vw"
      className="pointer-events-none relative w-auto max-w-4xl shrink-0 select-none md:max-w-7xl xl:max-w-8xl"
    />
  );
};

export default HomePageAppImage;
