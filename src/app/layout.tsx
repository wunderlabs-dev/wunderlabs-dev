import "@/static/css/globals.css";

import type { ReactNode } from "react";
import type { Metadata } from "next";
import { Host_Grotesk, JetBrains_Mono } from "next/font/google";
import { toString } from "es-toolkit/compat";
import { GlimmProvider, InterceptLinks, type Palette } from "glimm/next";
import { NextIntlClientProvider } from "next-intl";

import { cn } from "@/utils/helpers";
import { BASE_URL } from "@/utils/const";

import { RouteTransition } from "@/components/ui/route-transition";

import copy from "@/copy/en.json";

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

const palette = {
  a: [0.7270762082133189, 0.7189040895546981, 0.7007919925126606],
  b: [0.2642885270697761, 0.2602615380989282, 0.2516157019216029],
  c: [0.5, 0.5, 0.5],
  d: [0.9859578090219716, 0.9838341686916666, 0.9780346309902491],
} satisfies Palette;

const ogImage = {
  url: "/og-image-1200x630.png",
  width: OG_IMAGE_WIDTH,
  height: OG_IMAGE_HEIGHT,
  alt: copy.site.title,
};

const siteUrl = toString(new URL("/", BASE_URL));
const organizationId = toString(new URL("/#organization", BASE_URL));
const websiteId = toString(new URL("/#website", BASE_URL));

const data = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@id": organizationId,
      "@type": "Organization",
      name: copy.site.title,
      description: copy.site.description,
      alternateName: copy.site.alternateName,
      url: siteUrl,
      email: copy.contact.email,
      logo: toString(new URL("/favicon.svg", BASE_URL)),
      image: toString(new URL(ogImage.url, BASE_URL)),
      sameAs: ["https://github.com/wunderlabs-dev", "https://x.com/wunderlabs", "https://agentic.tm"],
    },
    {
      "@id": websiteId,
      "@type": "WebSite",
      name: copy.site.title,
      url: siteUrl,
      description: copy.site.description,
      inLanguage: "en-US",
      publisher: {
        "@id": organizationId,
      },
    },
  ],
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
      data-scroll-behavior="smooth"
      className={cn(
        hostGrotesk.variable,
        jetBrainsMono.variable,
        "scroll-smooth bg-cream-50 font-sans text-gray-400 antialiased selection:bg-gray-400 selection:text-gray-50",
      )}
    >
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(data),
          }}
        />
        <NextIntlClientProvider>
          <GlimmProvider palette={palette}>
            <InterceptLinks />
            <RouteTransition>{children}</RouteTransition>
          </GlimmProvider>
        </NextIntlClientProvider>
      </body>
    </html>
  );
};

export default RootLayout;
