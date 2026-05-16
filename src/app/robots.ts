import type { MetadataRoute } from "next";

import { BASE_URL } from "@/utils/const";

export const dynamic = "force-static";

const robots = (): MetadataRoute.Robots => {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },
    sitemap: new URL("/sitemap.xml", BASE_URL).toString(),
  };
};

export default robots;
