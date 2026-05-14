import type { ComponentProps } from "react";

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { SvgIconArrowLink, SvgIconStatus } from "@/components/ui/svg-icon";
import { Typography } from "@/components/ui/typography";

type HomePageProjectsItemProps = ComponentProps<typeof Card> & {
  description: string;
  githubLabel: string;
  launchLabel: string;
  status: string;
  tags: string;
  title: string;
};

const HomePageProjectsItem = ({
  description,
  githubLabel,
  launchLabel,
  status,
  tags,
  title,
  ...props
}: HomePageProjectsItemProps) => {
  return (
    <Card {...props}>
      <div className="flex flex-col gap-4">
        <div className="flex items-center gap-4">
          <SvgIconStatus size="xs" />
          <Typography variant="code">{status}</Typography>
        </div>

        <div className="flex flex-col gap-2">
          <Typography variant="h2">{title}</Typography>
          <Typography variant="body" className="text-gray-250">
            {description}
          </Typography>
        </div>

        <Typography variant="code" className="text-gray-250">
          {tags}
        </Typography>
      </div>

      <div className="flex flex-wrap items-center gap-3">
        <Button type="button" startAdornment={<SvgIconArrowLink className="size-5" />}>
          {launchLabel}
        </Button>
        <Button type="button" variant="outlined">
          {githubLabel}
        </Button>
      </div>
    </Card>
  );
};

export { HomePageProjectsItem };
