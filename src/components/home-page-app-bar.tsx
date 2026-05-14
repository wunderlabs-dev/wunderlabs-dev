"use client";

import Link from "next/link";
import { useTranslations } from "next-intl";
import { type ComponentProps } from "react";

import { cn } from "@/utils/helpers";

import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { Nav, NavLink } from "@/components/ui/nav";
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
    <header className={cn("sticky top-4 z-50", className)} {...props}>
      <Container variant="4xl" className="flex items-center justify-center gap-3">
        <Link
          href="/"
          className="rounded-4xl bg-cream-100/30 px-6 py-4 backdrop-blur-2xl transition-colors hover:bg-cream-100/50"
        >
          <SvgIconSymbol className="h-6 text-gray-400" />
        </Link>

        <div className="flex items-center gap-0 rounded-4xl bg-cream-100/30 p-1 backdrop-blur-2xl lg:gap-12">
          <Nav>
            <div className="hidden md:flex">
              {links.map((link) => (
                <NavLink key={link.href} href={link.href}>
                  {t(link.labelKey)}
                </NavLink>
              ))}
            </div>
            <span className="cursor-pointer select-none px-4 py-3 text-base leading-6 text-gray-250 hover:text-gray-400 md:hidden">
              {t("appBar.menu")}
            </span>
          </Nav>

          <Link href="/#contact">
            <Button startAdornment={<SvgIconContact />}>{t("appBar.cta")}</Button>
          </Link>
        </div>
      </Container>
    </header>
  );
};

export { HomePageAppBar };
