import { useTranslations } from "next-intl";
import type { ComponentProps } from "react";

import { cn } from "@/utils/helpers";
import { renderers } from "@/utils/renderers";

import { HomePageProjectsItem } from "@/components/home-page-projects-item";
import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";
import { TitleGroup } from "@/components/ui/title-group";

type HomePageProjectsProps = ComponentProps<"section">;

const HomePageProjects = ({ className, ...props }: HomePageProjectsProps) => {
  const t = useTranslations();

  return (
    <Section
      id="projects"
      pb="default"
      className={cn(
        "relative flex flex-col gap-4 sm:gap-24",
        "before:absolute before:inset-y-0 before:left-1/2 before:z-0 before:w-px before:bg-gray-100/50",
        className,
      )}
      {...props}
    >
      <TitleGroup
        className="relative z-10 bg-cream-50 pb-8 sm:bg-transparent sm:pb-0"
        subtitle={t("projects.kicker")}
        title={t.rich("projects.title", renderers)}
        titleAs="h2"
      />

      <Container variant="5xl" className="relative z-10 grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-0">
        <div
          className={cn(
            "flex min-w-0 flex-row-reverse items-start",
            "lg:before:mt-12 lg:before:w-16 lg:before:shrink-0 lg:before:border-t lg:before:border-gray-100/50",
          )}
        >
          <HomePageProjectsItem
            badge={t("projects.badge")}
            status={t("projects.cards.claudebin.status")}
            title={t("projects.cards.claudebin.title")}
            description={t("projects.cards.claudebin.description.p1")}
            launchLabel={t("projects.cards.claudebin.launchLabel")}
            launchUrl={t("projects.cards.claudebin.launchUrl")}
            githubLabel={t("projects.cards.claudebin.githubLabel")}
            githubUrl={t("projects.cards.claudebin.githubUrl")}
          />
        </div>

        <div
          className={cn(
            "flex min-w-0 items-start lg:pt-48",
            "lg:before:mt-12 lg:before:w-16 lg:before:shrink-0 lg:before:border-t lg:before:border-gray-100/50",
          )}
        >
          <HomePageProjectsItem
            badge={t("projects.badge")}
            status={t("projects.cards.openable.status")}
            title={t("projects.cards.openable.title")}
            description={t("projects.cards.openable.description")}
            launchLabel={t("projects.cards.openable.launchLabel")}
            launchUrl={t("projects.cards.openable.launchUrl")}
            githubLabel={t("projects.cards.openable.githubLabel")}
            githubUrl={t("projects.cards.openable.githubUrl")}
          />
        </div>
      </Container>
    </Section>
  );
};

export { HomePageProjects };
