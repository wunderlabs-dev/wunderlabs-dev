import { useTranslations } from "next-intl";
import type { ComponentProps } from "react";

import { cn } from "@/utils/helpers";
import { renderers } from "@/utils/renderers";

import { HomePageProjectsItem } from "@/components/home-page-projects-item";
import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";
import { TitleGroup } from "@/components/ui/title-group";

type HomePageProjectsProps = ComponentProps<"section">;

const projectColumnClassName =
  "flex min-w-0 items-start before:mt-12 before:w-16 before:shrink-0 before:border-t before:border-gray-100/50";

const HomePageProjects = ({ className, ...props }: HomePageProjectsProps) => {
  const t = useTranslations();

  return (
    <Section
      id="projects"
      pb="default"
      className={cn(
        "relative flex flex-col gap-24 px-12",
        "before:absolute before:inset-y-0 before:left-1/2 before:z-0 before:w-px before:bg-gray-100/50",
        className,
      )}
      {...props}
    >
      <TitleGroup
        className="relative z-10"
        subtitle={t("projects.kicker")}
        title={t.rich("projects.title", renderers)}
      />

      <Container variant="5xl" className="relative z-10 grid grid-cols-1 md:grid-cols-2">
        <div className={cn(projectColumnClassName, "flex-row-reverse")}>
          <HomePageProjectsItem
            badge={t("projects.badge")}
            status={t("projects.cards.claudebin.status")}
            title={t("projects.cards.claudebin.title")}
            description={t("projects.cards.claudebin.description")}
            tags={t("projects.cards.claudebin.tags")}
            launchLabel={t("projects.cards.claudebin.launchLabel")}
            githubLabel={t("projects.cards.claudebin.githubLabel")}
          />
        </div>

        <div className={cn(projectColumnClassName, "pt-48")}>
          <HomePageProjectsItem
            badge={t("projects.badge")}
            status={t("projects.cards.openable.status")}
            title={t("projects.cards.openable.title")}
            description={t("projects.cards.openable.description")}
            tags={t("projects.cards.openable.tags")}
            launchLabel={t("projects.cards.openable.launchLabel")}
            githubLabel={t("projects.cards.openable.githubLabel")}
          />
        </div>
      </Container>
    </Section>
  );
};

export { HomePageProjects };
