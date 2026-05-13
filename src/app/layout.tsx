import "@/static/css/globals.css";

import type { Metadata } from "next";
import { Host_Grotesk, JetBrains_Mono } from "next/font/google";
import type { ReactNode } from "react";
import { NextIntlClientProvider } from "next-intl";

import { HomePageFooter } from "@/components/home-page-footer";
import { cn } from "@/utils/helpers";

import copy from "@/copy/en.json";

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
      className={cn(
        hostGrotesk.variable,
        jetBrainsMono.variable,
        "bg-cream-50 font-sans text-gray-400 antialiased scroll-smooth",
      )}
    >
      <body className="min-h-dvh">
        <NextIntlClientProvider>
          {children}
          <HomePageFooter />
        </NextIntlClientProvider>
      </body>
    </html>
  );
};

export default RootLayout;
