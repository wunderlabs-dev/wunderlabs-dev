import type { Metadata } from "next";
import { Host_Grotesk, JetBrains_Mono } from "next/font/google";
import type { ReactNode } from "react";
import { NextIntlClientProvider } from "next-intl";

import { cn } from "@/utils/helpers";
import { BASE_URL } from "@/utils/const";

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
  metadataBase: BASE_URL,
  title: copy.site.title,
  description: copy.site.description,
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: copy.site.title,
    description: copy.site.description,
    url: "/",
    siteName: copy.site.title,
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary",
    title: copy.site.title,
    description: copy.site.description,
  },
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
        "scroll-smooth bg-cream-50 font-sans text-gray-400 antialiased selection:bg-gray-400 selection:text-gray-50",
      )}
    >
      <body>
        <NextIntlClientProvider>{children}</NextIntlClientProvider>
      </body>
    </html>
  );
};

export default RootLayout;
