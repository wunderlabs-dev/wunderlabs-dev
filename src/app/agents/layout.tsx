import type { ReactNode } from "react";
import type { Metadata } from "next";

import copy from "@/copy/en.json";

export const metadata: Metadata = {
  title: copy.agents.metadata.title,
};

const AgentsLayout = ({ children }: { children: ReactNode }) => {
  return (
    <div className="min-h-dvh bg-gray-400 px-6 py-12 md:py-24 md:px-12 font-mono text-gray-50 selection:bg-white selection:text-gray-400">
      <div className="mx-auto max-w-xl">{children}</div>
    </div>
  );
};

export default AgentsLayout;
