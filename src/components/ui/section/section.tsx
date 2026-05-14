import type { SectionProps, SectionVariantClassNames } from "./types";

import { cn } from "@/utils/helpers";

const sectionPaddingTopClassNames: SectionVariantClassNames = {
  default: "pt-48",
  compact: "pt-40",
  none: "pt-0",
} as const;

const sectionPaddingBottomClassNames: SectionVariantClassNames = {
  default: "pb-48",
  compact: "pb-40",
  none: "pb-0",
} as const;

const Section = ({ className, pb = "none", pt = "default", ...props }: SectionProps) => {
  return (
    <section
      className={cn("relative", sectionPaddingTopClassNames[pt], sectionPaddingBottomClassNames[pb], className)}
      {...props}
    />
  );
};

export default Section;
