"use client";

import type { ComponentProps } from "react";
import Link from "next/link";
import { useTranslations } from "next-intl";

import { cn } from "@/utils/helpers";

import { Container } from "@/components/ui/container";
import { Typography } from "@/components/ui/typography";
import { SvgIconWunderlabs } from "@/components/ui/svg-icon";

type HomePageFooterProps = ComponentProps<"footer">;

const links = [
  {
    title: "footer.product",
    links: [
      { href: "https://claudebin.com", labelKey: "footer.claudebin" },
      { href: "https://openable.dev", labelKey: "footer.openable" },
    ],
  },
  {
    title: "footer.community",
    links: [
      { href: "https://github.com/wunderlabs-dev", labelKey: "footer.github" },
      { href: "https://agentic.tm", labelKey: "footer.agentic" },
      { href: "https://x.com/wunderlabs", labelKey: "footer.wunderlabsX" },
    ],
  },
] as const;

const HomePageFooter = ({ className, ...props }: HomePageFooterProps) => {
  const t = useTranslations();

  return (
    <footer data-slot="footer" className={cn("px-12 pt-6 pb-12", className)} {...props}>
      <Container className="flex w-full flex-col-reverse justify-between gap-12 lg:flex-row">
        <div className="flex min-w-px flex-1 flex-col items-start justify-between gap-12 pr-12">
          <Link href="/" aria-label={t("site.title")}>
            <SvgIconWunderlabs className="h-6 w-full max-w-xl text-gray-400" />
          </Link>
          <Typography variant="body" className="leading-normal whitespace-nowrap text-gray-250">
            {t("footer.copyright", { year: new Date().getFullYear() })}
          </Typography>
        </div>

        <div className="flex shrink-0 flex-col gap-6 sm:flex-row sm:gap-12">
          {links.map((section) => (
            <nav key={section.title} className="flex flex-col gap-3">
              <Typography variant="body2" as="h2" className="whitespace-nowrap text-gray-400">
                {t(section.title)}
              </Typography>

              {section.links.map((item) => (
                <Link key={item.href} href={item.href} className="text-gray-400">
                  <Typography variant="body" as="span" className="whitespace-nowrap">
                    {t(item.labelKey)}
                  </Typography>
                </Link>
              ))}
            </nav>
          ))}
        </div>
      </Container>
    </footer>
  );
};

export { HomePageFooter };
