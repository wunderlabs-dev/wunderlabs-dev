import type { SvgIconProps } from "./types";

import SvgIcon from "./svg-icon";

const SvgIconSymbol = ({ className, ...props }: Omit<SvgIconProps, "children" | "viewBox">) => {
  return (
    <SvgIcon viewBox="0 0 16 7.9" size="auto" className={className} {...props}>
      <path d="M11.9,7.9H9.8V7.7L13.9,0H16v0.2L11.9,7.9z M0,0.3V0h2.1l3,5.9L8.1,0h2.1v0.2l-4,7.6H3.9L0,0.3z" />
    </SvgIcon>
  );
};

export default SvgIconSymbol;
