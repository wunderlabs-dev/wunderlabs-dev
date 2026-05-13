import "@/static/css/globals.css";

import type { Metadata } from "next";
import { Host_Grotesk } from "next/font/google";
import type { ReactNode } from "react";
import { NextIntlClientProvider } from "next-intl";

import copy from "@/copy/en.json";
import { cn } from "@/utils/helpers";

const hostGrotesk = Host_Grotesk({
  subsets: ["latin"],
  weight: "variable",
  display: "swap",
});

export const metadata: Metadata = {
  title: copy.site.title,
  icons: {
    icon: "/favicon.svg",
  },
};

const RootLayout = ({ children }: { children: ReactNode }) => {
  return (
    <html lang="en" className={cn(hostGrotesk.className, "bg-cream-50 text-gray-400 antialiased scroll-smooth")}>
      <body className="min-h-dvh">
        <NextIntlClientProvider>{children}</NextIntlClientProvider>
      </body>
    </html>
  );
};

export default RootLayout;
