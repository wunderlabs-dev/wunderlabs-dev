import type { MetadataRoute } from "next";
import { toString } from "es-toolkit/compat";

import { BASE_URL } from "@/utils/const";

export const dynamic = "force-static";

const robots = (): MetadataRoute.Robots => {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },
    sitemap: toString(new URL("/sitemap.xml", BASE_URL)),
  };
};

export default robots;
