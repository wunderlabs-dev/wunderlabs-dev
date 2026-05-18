import type { SvgIconProps } from "./types";

import { cn } from "@/utils/helpers";

import SvgIcon from "./svg-icon";

const SvgIconStatus = ({ className, ...props }: Omit<SvgIconProps, "children" | "viewBox">) => {
  return (
    <SvgIcon viewBox="0 0 16 16" className={cn("text-green-50", className)} {...props}>
      <path d="M0,5.3C0,2.4,2.4,0,5.3,0h5.3C13.6,0,16,2.4,16,5.3v5.3c0,2.9-2.4,5.3-5.3,5.3H5.3C2.4,16,0,13.6,0,10.7V5.3 z" />
    </SvgIcon>
  );
};

export default SvgIconStatus;
