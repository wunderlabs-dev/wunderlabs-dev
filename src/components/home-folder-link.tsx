import { useRef } from "react";
import { useHover } from "usehooks-ts";

import { Typography } from "@/components/typography";
import { SvgIconFolder, SvgIconFolderOpen } from "@/components/svg-icon";

type HomeFolderLinkProps = {
  href: string;
  label: string;
};

const HomeFolderLink = ({ href, label }: HomeFolderLinkProps) => {
  const ref = useRef<HTMLAnchorElement>(null as never);
  const hover = useHover<HTMLAnchorElement>(ref);

  return (
    <a
      ref={ref}
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="flex cursor-pointer flex-col items-center justify-center gap-1 px-2 py-1"
    >
      {hover ? <SvgIconFolderOpen size="large" /> : <SvgIconFolder size="large" />}

      <Typography variant="body2" uppercase>
        {label}
      </Typography>
    </a>
  );
};

export default HomeFolderLink;
