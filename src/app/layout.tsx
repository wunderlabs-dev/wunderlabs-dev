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

const palette = {
  a: [0.7270762082133189, 0.7189040895546981, 0.7007919925126606],
  b: [0.2642885270697761, 0.2602615380989282, 0.2516157019216029],
  c: [0.5, 0.5, 0.5],
  d: [0.9859578090219716, 0.9838341686916666, 0.9780346309902491],
} satisfies Palette;

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

const openGraphSrc = {
  url: "/og-image-1200x630.png",
  width: OG_IMAGE_WIDTH,
  height: OG_IMAGE_HEIGHT,
  alt: copy.site.title,
};

const canonicalSiteUrl = toString(new URL("/", BASE_URL));
const organizationSchemaId = toString(new URL("/#about", BASE_URL));
const websiteSchemaId = toString(new URL("/#home", BASE_URL));

const data = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": organizationSchemaId,
      name: copy.site.title,
      alternateName: copy.site.alternateName,
      description: copy.site.description,
      url: canonicalSiteUrl,
      sameAs: ["https://github.com/wunderlabs-dev", "https://agentic.tm"],
      email: copy.contact.email,
      logo: toString(new URL("/favicon.svg", BASE_URL)),
      image: toString(new URL(openGraphSrc.url, BASE_URL)),
      founder: [
        { "@type": "Person", name: "Marius Bălaj", jobTitle: "Co-Founder", url: "https://balajmarius.com/" },
        { "@type": "Person", name: "Vlad Temian", jobTitle: "Co-Founder", url: "https://blog.vtemian.com/" },
      ],
    },
    {
      "@type": "WebSite",
      "@id": websiteSchemaId,
      name: copy.site.title,
      description: copy.site.description,
      inLanguage: "en-US",
      url: canonicalSiteUrl,
      publisher: {
        "@id": organizationSchemaId,
      },
    },
    {
      "@type": "WebApplication",
      "@id": "https://claudebin.com/#webapplication",
      name: copy.projects.cards.claudebin.title,
      description: copy.projects.cards.claudebin.description.p1,
      url: copy.projects.cards.claudebin.launchUrl,
      applicationCategory: "DeveloperApplication",
      operatingSystem: "Web",
      creator: {
        "@id": organizationSchemaId,
      },
    },
    {
      "@type": "WebApplication",
      "@id": "https://openable.dev/#webapplication",
      name: copy.projects.cards.openable.title,
      description: copy.projects.cards.openable.description,
      url: copy.projects.cards.openable.launchUrl,
      applicationCategory: "DeveloperApplication",
      operatingSystem: "Web",
      creator: {
        "@id": organizationSchemaId,
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
    images: [openGraphSrc],
  },
  twitter: {
    card: "summary_large_image",
    title: copy.site.title,
    description: copy.site.description,
    images: [openGraphSrc],
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
