"use client";

import { useTranslations } from "next-intl";
import { motion } from "motion/react";
import type { ComponentProps } from "react";

import { cn } from "@/utils/helpers";
import { appBar } from "@/utils/animations";

import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { Nav, NavLink } from "@/components/ui/nav";
import { Drawer, DrawerClose, DrawerContent, DrawerTitle, DrawerTrigger } from "@/components/ui/drawer";
import { SvgIconContact, SvgIconSymbol } from "@/components/ui/svg-icon";

const links = [
  { href: "#about", labelKey: "home" },
  { href: "#lab", labelKey: "about" },
  { href: "#projects", labelKey: "projects" },
  { href: "#community", labelKey: "community" },
] as const;

type HomePageAppBarProps = ComponentProps<"header">;

const HomePageAppBar = ({ className, ...props }: HomePageAppBarProps) => {
  const t = useTranslations("appBar");

  return (
    <header className={cn("fixed inset-x-0 top-4 z-50", className)} {...props}>
      <motion.div
        initial={appBar.initial}
        animate={appBar.animate}
        transition={appBar.transition}
        className="will-change-transform will-change-opacity"
      >
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

              <Drawer>
                <DrawerTrigger
                  data-slot="nav-link"
                  className={cn(
                    "inline-flex cursor-pointer items-center rounded-4xl px-4 py-3 text-base leading-6 font-normal text-gray-250 transition-colors duration-150 ease-in-out select-none hover:text-gray-400 md:hidden",
                    "border-0 bg-transparent",
                  )}
                >
                  {t("menu")}
                </DrawerTrigger>

                <DrawerContent>
                  <DrawerTitle className="sr-only">{t("menu")}</DrawerTitle>

                  {links.map((link) => (
                    <DrawerClose key={link.href} asChild>
                      <NavLink href={link.href} className="px-4 py-3 text-gray-50 hover:text-white">
                        {t(link.labelKey)}
                      </NavLink>
                    </DrawerClose>
                  ))}
                </DrawerContent>
              </Drawer>
            </Nav>

            <NavLink href="#contact">
              <Button startAdornment={<SvgIconContact />}>{t("cta")}</Button>
            </NavLink>
          </div>
        </Container>
      </motion.div>
    </header>
  );
};

export { HomePageAppBar };
