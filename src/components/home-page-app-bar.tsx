"use client";

import { useTranslations } from "next-intl";
import type { ComponentProps } from "react";

import { cn } from "@/utils/helpers";

import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { Nav, NavLink } from "@/components/ui/nav";
import { SvgIconContact, SvgIconSymbol } from "@/components/ui/svg-icon";

const links = [
  { href: "#about", labelKey: "wunderlabs" },
  { href: "#lab", labelKey: "lab" },
  { href: "#projects", labelKey: "projects" },
  { href: "#community", labelKey: "community" },
] as const;

type HomePageAppBarProps = ComponentProps<"header">;

const HomePageAppBar = ({ className, ...props }: HomePageAppBarProps) => {
  const t = useTranslations("appBar");

  return (
    <header className={cn("sticky top-4 z-50", className)} {...props}>
      <Container variant="4xl" className="flex items-center justify-center gap-3">
        <NavLink
          href="#about"
          className={cn(
            "rounded-4xl bg-cream-100/30 px-6 py-4 backdrop-blur-2xl",
            "transition-colors hover:bg-cream-100/50",
          )}
        >
          <SvgIconSymbol className="h-6 text-gray-400" />
        </NavLink>

        <div className="flex items-center gap-0 rounded-4xl bg-cream-100/30 p-1 backdrop-blur-2xl lg:gap-12">
          <Nav>
            <div className="hidden md:flex">
              {links.map((link) => (
                <NavLink key={link.href} href={link.href} className="px-4 py-3">
                  {t(link.labelKey)}
                </NavLink>
              ))}
            </div>

            <NavLink className="px-4 py-3 md:hidden">{t("menu")}</NavLink>
          </Nav>

          <NavLink href="#contact">
            <Button startAdornment={<SvgIconContact />}>{t("cta")}</Button>
          </NavLink>
        </div>
      </Container>
    </header>
  );
};

export { HomePageAppBar };
