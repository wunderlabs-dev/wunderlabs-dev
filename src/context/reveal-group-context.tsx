"use client";

import { createContext, useContext, type ReactNode } from "react";

type RevealGroupContextValue = {
  isRevealed: boolean;
};

const RevealGroupContext = createContext<RevealGroupContextValue | null>(null);

type RevealGroupContextProviderProps = RevealGroupContextValue & {
  children: ReactNode;
};

const RevealGroupContextProvider = ({ children, isRevealed }: RevealGroupContextProviderProps) => {
  return <RevealGroupContext.Provider value={{ isRevealed }}>{children}</RevealGroupContext.Provider>;
};

// ABOUTME: returns null outside a group so a standalone reveal keeps falling back to its own viewport observer.
const useRevealGroup = (): RevealGroupContextValue | null => useContext(RevealGroupContext);

export { RevealGroupContextProvider, useRevealGroup };
export type { RevealGroupContextValue };
