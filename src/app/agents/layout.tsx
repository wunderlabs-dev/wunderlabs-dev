import type { ReactNode } from "react";

const AgentsLayout = ({ children }: { children: ReactNode }) => {
  return (
    <div className="min-h-dvh bg-gray-400 text-gray-50 font-mono p-12 selection:bg-white selection:text-gray-400">
      <div className="max-w-xl mx-auto">{children}</div>
    </div>
  );
};

export default AgentsLayout;
