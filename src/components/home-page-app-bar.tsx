import Link from "next/link";
import { useTranslations } from "next-intl";
import type { ComponentProps } from "react";

import { cn } from "@/utils/helpers";

import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { SvgIconContact, SvgIconSymbol } from "@/components/ui/svg-icon";

const links = [
  { href: "/", labelKey: "appBar.wunderlabs" },
  { href: "#lab", labelKey: "appBar.lab" },
  { href: "#projects", labelKey: "appBar.projects" },
  { href: "#community", labelKey: "appBar.community" },
] as const;

type HomePageAppBarProps = ComponentProps<"header">;

const HomePageAppBar = ({ className, ...props }: HomePageAppBarProps) => {
  const t = useTranslations();

  return (
    <header className={cn("sticky top-4", className)} {...props}>
      <Container variant="4xl" className="flex items-center justify-center gap-3">
        <Link href="/" className="rounded-4xl bg-gray-150/10 px-6 py-4 backdrop-blur-2xl">
          <SvgIconSymbol className="h-6 text-gray-400" />
        </Link>

        <nav className="flex items-center gap-12 rounded-4xl bg-gray-150/10 p-1 backdrop-blur-2xl">
          <div className="flex items-center gap-1">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="rounded-4xl px-4 py-3 text-base leading-6 text-gray-250 hover:bg-gray-150/10 hover:text-gray-400"
              >
                {t(link.labelKey)}
              </Link>
            ))}
          </div>

          <Button startAdornment={<SvgIconContact />}>{t("appBar.cta")}</Button>
        </nav>
      </Container>
    </header>
  );
};

export { HomePageAppBar };
