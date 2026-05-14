import type { Metadata } from "next";
import { Host_Grotesk, JetBrains_Mono } from "next/font/google";
import type { ReactNode } from "react";
import { NextIntlClientProvider } from "next-intl";

import { cn } from "@/utils/helpers";

import { HomePageAppBar } from "@/components/home-page-app-bar";
import { HomePageFooter } from "@/components/home-page-footer";

import copy from "@/copy/en.json";
import "@/static/css/globals.css";

const hostGrotesk = Host_Grotesk({
  subsets: ["latin"],
  weight: "variable",
  display: "swap",
  variable: "--font-host-grotesk",
});

const jetBrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  weight: "variable",
  display: "swap",
  variable: "--font-jetbrains-mono",
});

export const metadata: Metadata = {
  title: copy.site.title,
  icons: {
    icon: "/favicon.svg",
  },
};

const RootLayout = ({ children }: { children: ReactNode }) => {
  return (
    <html
      lang="en"
      className={cn(hostGrotesk.variable, jetBrainsMono.variable, "bg-cream-50 font-sans text-gray-400 antialiased")}
    >
      <body>
        <NextIntlClientProvider>
          <HomePageAppBar />
          {children}
          <HomePageFooter />
        </NextIntlClientProvider>
      </body>
    </html>
  );
};

export default RootLayout;
