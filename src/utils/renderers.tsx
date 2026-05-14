import type { ReactNode } from "react";

import { Link } from "@/components/ui/link";

export const renderers = {
  link: (chunks: ReactNode) => (
    <Link href="https://agentic.tm" target="_blank">
      {chunks}
    </Link>
  ),
  muted: (chunks: ReactNode) => <span className="inline sm:block text-gray-200">{chunks}</span>,
};
