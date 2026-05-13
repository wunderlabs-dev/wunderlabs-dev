import type { ReactNode } from "react";

import { Link } from "@/components/ui/link";

export const renderers = {
  muted: (chunks: ReactNode) => <span className="block text-gray-200">{chunks}</span>,
};

export const communityRenderers = {
  ...renderers,
  link: (chunks: ReactNode) => <Link href="https://agentic.tm">{chunks}</Link>,
};
