import type { SvgIconProps } from "./types";

import SvgIcon from "./svg-icon";

const SvgIconRobot = (props: Omit<SvgIconProps, "children" | "viewBox">) => {
  return (
    <SvgIcon viewBox="0 0 16 16" {...props}>
      <path d="M12,2.9H9V2.6V2.2V2c0-0.4-0.3-0.7-0.7-0.7H7.7C7.3,1.3,7,1.6,7,2v0.2v0.4v0.3H4c-2.1,0-3.8,1.7-3.8,3.8 v4.1c0,2.1,1.7,3.8,3.8,3.8H12c2.1,0,3.8-1.7,3.8-3.8V6.8C15.9,4.7,14.2,2.9,12,2.9z M14.1,10.8c0,1.2-0.9,2.1-2.1,2.1H4 c-1.2,0-2.1-0.9-2.1-2.1V6.8c0-1.2,0.9-2.1,2.1-2.1H12c1.2,0,2.1,0.9,2.1,2.1V10.8z" />
      <circle cx="6" cy="8.8" r="1" />
      <circle cx="10.5" cy="8.8" r="1" />
    </SvgIcon>
  );
};

export default SvgIconRobot;
