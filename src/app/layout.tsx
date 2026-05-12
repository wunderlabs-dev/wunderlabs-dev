import "@/static/css/globals.css";

import type { ReactNode } from "react";
import { NextIntlClientProvider } from "next-intl";

const RootLayout = ({ children }: { children: ReactNode }) => {
  return (
    <html lang="en" className="scroll-smooth">
      <body>
        <NextIntlClientProvider>{children}</NextIntlClientProvider>
      </body>
    </html>
  );
};

export default RootLayout;
