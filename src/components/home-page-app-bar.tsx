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

const surfaceClassName = "rounded-4xl bg-cream-100/30 backdrop-blur-2xl";
const navLinkClassName = "px-4 py-3";

type HomePageAppBarProps = ComponentProps<"header">;

const HomePageAppBar = ({ className, ...props }: HomePageAppBarProps) => {
  const t = useTranslations("appBar");

  return (
    <header className={cn("sticky top-4 z-50", className)} {...props}>
      <Container variant="4xl" className="flex items-center justify-center gap-3">
        <NavLink href="#about" className={cn("px-6 py-4", surfaceClassName, "transition-colors hover:bg-cream-100/50")}>
          <SvgIconSymbol className="h-6 text-gray-400" />
        </NavLink>

        <div className={cn("flex items-center gap-0 p-1 lg:gap-12", surfaceClassName)}>
          <Nav>
            <div className="hidden md:flex">
              {links.map((link) => (
                <NavLink key={link.href} href={link.href} className={navLinkClassName}>
                  {t(link.labelKey)}
                </NavLink>
              ))}
            </div>
            <NavLink className={cn("md:hidden", navLinkClassName)}>{t("menu")}</NavLink>
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
