import type { SvgIconProps } from "./types";

import SvgIcon from "./svg-icon";

const SvgIconPlay = (props: Omit<SvgIconProps, "children" | "viewBox">) => {
  return (
    <SvgIcon viewBox="0 0 16 16" {...props}>
      <path d="M3.6,16c-0.4,0-0.7-0.1-1-0.3c-0.7-0.4-1.2-1.1-1.2-1.9V2.2c0-0.8,0.4-1.5,1.2-1.9c0.7-0.4,1.6-0.3,2.3,0.1 l8.7,5.8c0.6,0.4,1,1.1,1,1.8c0,0.7-0.4,1.4-1,1.8l-8.7,5.8C4.5,15.9,4.1,16,3.6,16z M3.7,1.6c-0.1,0-0.2,0-0.3,0.1 c-0.1,0-0.3,0.2-0.3,0.5v11.6c0,0.3,0.2,0.5,0.3,0.5c0.1,0.1,0.3,0.2,0.6,0l8.7-5.8c0.2-0.2,0.3-0.4,0.3-0.5c0-0.1,0-0.3-0.3-0.5 l0,0L4,1.7C3.9,1.6,3.8,1.6,3.7,1.6z" />
    </SvgIcon>
  );
};

export default SvgIconPlay;
