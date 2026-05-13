import type { ComponentProps, ReactNode } from "react";

export type TitleGroupProps = Omit<ComponentProps<"div">, "title"> & {
  subtitle: ReactNode;
  title: ReactNode;
};
