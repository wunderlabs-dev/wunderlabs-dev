import type { SvgIconProps } from "./types";

import SvgIcon from "./svg-icon";

const SvgIconArrowLink = (props: Omit<SvgIconProps, "children" | "viewBox">) => {
  return (
    <SvgIcon viewBox="0 0 16 16" {...props}>
      <path d="M4.3,3.2c-0.4,0-0.8,0.4-0.8,0.8v7.7c0,0.4,0.4,0.8,0.8,0.8H12c0.4,0,0.8-0.4,0.8-0.8V8.5c0-0.4,0.3-0.7,0.7-0.7 s0.7,0.3,0.7,0.7v3.2c0,1.2-1,2.2-2.2,2.2H4.3c-1.2,0-2.2-1-2.2-2.2V4c0-1.2,1-2.2,2.2-2.2h3.2c0.4,0,0.7,0.3,0.7,0.7 S7.9,3.2,7.5,3.2H4.3z M10.1,2.5c0-0.4,0.3-0.7,0.7-0.7h2.6c0.4,0,0.7,0.3,0.7,0.7v2.6c0,0.4-0.3,0.7-0.7,0.7S12.7,5.5,12.7,5 V4.2L8.5,8.4c-0.3,0.3-0.7,0.3-1,0s-0.3-0.7,0-1l4.2-4.2h-0.9C10.4,3.2,10.1,2.9,10.1,2.5z" />
    </SvgIcon>
  );
};

export default SvgIconArrowLink;
