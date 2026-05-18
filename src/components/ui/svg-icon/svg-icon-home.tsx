import type { SvgIconProps } from "./types";

import SvgIcon from "./svg-icon";

const SvgIconHome = (props: Omit<SvgIconProps, "children" | "viewBox">) => {
  return (
    <SvgIcon viewBox="0 0 16 16" size="sm" {...props}>
      <path d="M10.4 12.8H5.6c-1.3 0-2.4-1-2.4-2.3V8.1l-.7.6c-.3.3-.8.2-1.1-.1-.2-.3-.2-.8.1-1l6-5.1c.3-.2.7-.2 1 0l6 5.1c.3.3.4.7.1 1.1-.3.3-.7.4-1.1.1l-.8-.7v2.4c.1 1.2-1 2.3-2.3 2.3m-5.6-6v3.7c0 .4.4.8.9.8h4.8c.5 0 .8-.4.8-.8V6.8L8 4z" />
    </SvgIcon>
  );
};

export default SvgIconHome;
