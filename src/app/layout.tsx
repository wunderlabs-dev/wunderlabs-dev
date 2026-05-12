import "@/static/css/globals.css";

import type { Metadata } from "next";
import type { ReactNode } from "react";
import { NextIntlClientProvider } from "next-intl";

const APP_URL = "https://wunderlabs.dev";

export const metadata: Metadata = {
  metadataBase: new URL(APP_URL),
  title: "Wunderlabs",
  description: "Wunderlabs builds focused software products.",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: APP_URL,
    title: "Wunderlabs",
    description: "Wunderlabs builds focused software products.",
    images: {
      url: "/og-image.png",
    },
  },
  twitter: {
    card: "summary_large_image",
    images: "/og-image.png",
  },
  icons: {
    icon: { url: "/favicon.svg", type: "image/svg+xml", sizes: "any" },
  },
};

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
