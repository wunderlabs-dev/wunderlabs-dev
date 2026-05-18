import type { SvgIconProps } from "./types";

import SvgIcon from "./svg-icon";

const SvgIconContact = (props: Omit<SvgIconProps, "children" | "viewBox">) => {
  return (
    <SvgIcon viewBox="0 0 16 16" size="sm" {...props}>
      <path d="M0.8 16c-0.1 0-0.2 0-0.3-0.1C0.2 15.8 0 15.5 0 15.2V2.4c0-0.6 0.3-1.3 0.7-1.7S1.8 0 2.4 0h11.1c0.6 0 1.3 0.3 1.7 0.7 0.5 0.5 0.8 1.1 0.8 1.7v8c0 0.6-0.3 1.3-0.7 1.7-0.5 0.5-1.1 0.7-1.7 0.7H4.4l-2.9 2.9C1.3 15.9 1.1 16 0.8 16zM2.4 1.7C2.2 1.7 2 1.8 1.9 1.9 1.8 2 1.7 2.2 1.7 2.4v10.7l1.8-1.8c0.2-0.2 0.4-0.2 0.6-0.2h9.6c0.2 0 0.4-0.1 0.5-0.2 0.1-0.1 0.2-0.3 0.2-0.5v-8c0-0.2-0.1-0.4-0.2-0.5-0.1-0.1-0.3-0.2-0.5-0.2H2.4z" />
    </SvgIcon>
  );
};

export default SvgIconContact;
