import cx, { type Argument } from "classnames";
import { twMerge } from "tailwind-merge";

export const cn = (...classNames: Argument[]) => {
  return twMerge(cx(...classNames));
};
