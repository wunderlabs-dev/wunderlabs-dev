import type { ReactNode } from "react";

const AgentsLayout = ({ children }: { children: ReactNode }) => {
  return <div className="min-h-dvh bg-gray-400 text-gray-50 font-mono">{children}</div>;
};

export default AgentsLayout;
