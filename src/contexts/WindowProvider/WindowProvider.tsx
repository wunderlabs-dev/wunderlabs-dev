// ABOUTME: Window state management context
// ABOUTME: Provides window state and actions
"use client";

import { createContext, useState, useContext, ReactNode } from "react";

type WindowState = "OPEN" | "CLOSED" | "MINIMIZED";

type WindowContextType = {
  state: WindowState;
  setState: (state: WindowState) => void;
};

const WindowContext = createContext<WindowContextType>({
  state: "OPEN",
  setState: () => {},
});

type WindowProviderProps = {
  children: ReactNode;
};

export const WindowProvider = ({ children }: WindowProviderProps) => {
  const [state, setState] = useState<WindowState>("OPEN");

  return (
    <WindowContext.Provider
      value={{
        state,
        setState,
      }}
    >
      {children}
    </WindowContext.Provider>
  );
};

export const useWindowState = () => {
  return useContext(WindowContext);
};
