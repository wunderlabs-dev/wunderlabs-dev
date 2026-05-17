import type { SvgIconProps } from "./types";

import SvgIcon from "./svg-icon";

const SvgIconAgenticDevEnvs = (props: Omit<SvgIconProps, "children" | "viewBox">) => {
  return (
    <SvgIcon viewBox="0 0 32 32" {...props}>
      <path d="M6,29.1c-0.6,0-1.1-0.5-1.1-1.1V6c0-0.6,0.5-1.1,1.1-1.1S7.1,5.4,7.1,6v22C7.1,28.6,6.6,29.1,6,29.1z M21,24.1H11c-0.6,0-1.1-0.5-1.1-1.1s0.5-1.1,1.1-1.1h10c0.6,0,1.1,0.5,1.1,1.1S21.6,24.1,21,24.1z M26,18.1H11 c-0.6,0-1.1-0.5-1.1-1.1s0.5-1.1,1.1-1.1h15c0.6,0,1.1,0.5,1.1,1.1S26.6,18.1,26,18.1z M26,12.1H11c-0.6,0-1.1-0.5-1.1-1.1 s0.5-1.1,1.1-1.1h15c0.6,0,1.1,0.5,1.1,1.1S26.6,12.1,26,12.1z" />
    </SvgIcon>
  );
};

export default SvgIconAgenticDevEnvs;
