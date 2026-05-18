import type { SvgIconProps } from "./types";

import SvgIcon from "./svg-icon";

const SvgIconGlobe = (props: Omit<SvgIconProps, "children" | "viewBox">) => {
  return (
    <SvgIcon viewBox="0 0 16 16" {...props}>
      <path d="M8,16C8,16,8,16,8,16c-4.4,0-8-3.6-8-8c0-4.4,3.6-8,8-8c0,0,0,0,0,0c4.4,0,8,3.6,8,8C16,12.4,12.4,16,8,16 C8,16,8,16,8,16z M10.6,2.2C11.8,3.6,13,5.7,13,8c0,2.3-1.2,4.4-2.4,5.8c2.2-1,3.7-3.2,3.7-5.8C14.3,5.4,12.8,3.2,10.6,2.2z M5.4,2.2C3.2,3.2,1.7,5.4,1.7,8c0,2.6,1.5,4.8,3.7,5.8C4.2,12.4,3,10.3,3,8C3,5.7,4.2,3.6,5.4,2.2z M7.2,2.8C6.1,3.9,4.7,5.9,4.7,8 c0,2.1,1.4,4.1,2.5,5.3V2.8z M8.8,2.7v10.5c1.1-1.2,2.5-3.1,2.5-5.2C11.3,5.9,9.9,3.9,8.8,2.7z" />
    </SvgIcon>
  );
};

export default SvgIconGlobe;
