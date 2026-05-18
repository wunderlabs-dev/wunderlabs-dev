import type { Metadata } from "next";
import { Host_Grotesk, JetBrains_Mono } from "next/font/google";
import type { ReactNode } from "react";
import { NextIntlClientProvider } from "next-intl";

import { cn } from "@/utils/helpers";
import { BASE_URL } from "@/utils/const";

import copy from "@/copy/en.json";
import "@/static/css/globals.css";

const OG_IMAGE_WIDTH = 1200;
const OG_IMAGE_HEIGHT = 630;

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

const ogImage = {
  url: "/og-image-1200x630.png",
  width: OG_IMAGE_WIDTH,
  height: OG_IMAGE_HEIGHT,
  alt: copy.site.title,
};

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
    images: [ogImage],
  },
  twitter: {
    card: "summary_large_image",
    title: copy.site.title,
    description: copy.site.description,
    images: [ogImage],
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
