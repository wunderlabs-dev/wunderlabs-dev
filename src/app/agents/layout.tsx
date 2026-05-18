import type { ReactNode } from "react";

const AgentsLayout = ({ children }: { children: ReactNode }) => {
  return (
    <div className="min-h-dvh bg-gray-400 px-8 py-12 font-mono text-gray-50 selection:bg-white selection:text-gray-400">
      <div className="mx-auto max-w-xl">{children}</div>
    </div>
  );
};

export default AgentsLayout;
