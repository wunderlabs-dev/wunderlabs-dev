import Image, { type StaticImageData } from "next/image";

import { cn } from "@/utils/helpers";

import copy from "@/copy/en.json";

type HomePageAppImageProps = {
  className?: string;
  src: StaticImageData;
};

const HomePageAppImage = ({ className, src }: HomePageAppImageProps) => {
  return (
    <div className={cn("flex w-full justify-center overflow-hidden", className)}>
      <Image
        src={src}
        alt={copy.site.label}
        sizes="(min-width: 1080px) 1080px, 100vw"
        className="pointer-events-none relative w-auto max-w-4xl shrink-0 select-none md:max-w-7xl xl:max-w-8xl"
      />
    </div>
  );
};

export { HomePageAppImage };
