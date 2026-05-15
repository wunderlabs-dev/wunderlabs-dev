"use client";

import { useTranslations } from "next-intl";
import { useState, type ComponentProps } from "react";
import { useCopyToClipboard } from "usehooks-ts";

import { cn } from "@/utils/helpers";

import { Typography } from "@/components/ui/typography";

type HomePageContactEmailProps = Omit<ComponentProps<"button">, "aria-label" | "children" | "onClick" | "onMouseLeave">;

const HomePageContactEmail = ({ className, ...props }: HomePageContactEmailProps) => {
  const t = useTranslations();
  const email = t("contact.email");

  const [, copy] = useCopyToClipboard();
  const [copied, setCopied] = useState<boolean | undefined>();

  const handleCopy = async () => {
    setCopied(await copy(email));
  };

  const handleMouseLeave = () => {
    setCopied(undefined);
  };

  return (
    <button
      type="button"
      data-slot="contact-email-copy"
      aria-label={t("contact.copyEmailAria")}
      className={cn(
        "group relative inline-flex max-w-full cursor-pointer items-center justify-end gap-0 overflow-visible rounded-4xl py-1 text-right",
        "transition-all duration-200 ease-out hover:gap-2 focus-visible:gap-2 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-gray-50",
        className,
      )}
      onClick={handleCopy}
      onMouseLeave={handleMouseLeave}
      {...props}
    >
      <Typography
        variant="code"
        className="min-w-0 truncate transition-transform duration-200 ease-out group-hover:-translate-x-1 group-focus-visible:-translate-x-1"
      >
        {email}
      </Typography>

      <span className="inline-flex max-w-0 shrink-0 translate-x-2 items-center overflow-hidden rounded-4xl bg-gray-50 px-0 py-0.5 font-sans text-xs font-semibold whitespace-nowrap text-gray-400 opacity-0 transition-all duration-200 ease-out group-hover:max-w-16 group-hover:translate-x-0 group-hover:px-2 group-hover:opacity-100 group-focus-visible:max-w-16 group-focus-visible:translate-x-0 group-focus-visible:px-2 group-focus-visible:opacity-100">
        {copied ? t("contact.copiedEmail") : t("contact.copyEmail")}
      </span>
    </button>
  );
};

export { HomePageContactEmail };
