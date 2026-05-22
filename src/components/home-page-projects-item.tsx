import NextLink from "next/link";
import type { ComponentProps } from "react";

import { cn } from "@/utils/helpers";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { SvgIconArrowLink, SvgIconStatus } from "@/components/ui/svg-icon";
import { Typography } from "@/components/ui/typography";

type HomePageProjectsItemProps = ComponentProps<typeof Card> & {
  badge: string;
  description: string;
  githubLabel: string;
  githubUrl: string;
  launchLabel: string;
  launchUrl: string;
  status: string;
  title: string;
};

const HomePageProjectsItem = ({
  badge,
  className,
  description,
  githubLabel,
  githubUrl,
  launchLabel,
  launchUrl,
  status,
  title,
  ...props
}: HomePageProjectsItemProps) => {
  return (
    <Card className={cn("relative", className)} {...props}>
      <Badge className="absolute top-0 right-0 -translate-x-8 -translate-y-1/2">{badge}</Badge>

      <div className="flex flex-col gap-4">
        <div className="flex items-center gap-4">
          <SvgIconStatus size="xs" />
          <Typography variant="code">{status}</Typography>
        </div>

        <div className="flex flex-col gap-2">
          <Typography as="h3" variant="h2">
            {title}
          </Typography>
          <Typography variant="body" className="text-gray-250">
            {description}
          </Typography>
        </div>
      </div>

      <div className="flex flex-wrap items-center gap-3">
        <NextLink href={launchUrl} target="_blank" rel="noreferrer">
          <Button type="button" startAdornment={<SvgIconArrowLink className="size-5" />}>
            {launchLabel}
          </Button>
        </NextLink>
        <NextLink href={githubUrl} target="_blank" rel="noreferrer">
          <Button type="button" variant="outlined">
            {githubLabel}
          </Button>
        </NextLink>
      </div>
    </Card>
  );
};

export { HomePageProjectsItem };
