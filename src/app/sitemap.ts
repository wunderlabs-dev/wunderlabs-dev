import type { MetadataRoute } from "next";
import { toString } from "es-toolkit/compat";

import { BASE_URL } from "@/utils/const";

const HOME_PRIORITY = 1;
const AGENTS_PRIORITY = 0.7;

export const dynamic = "force-static";

const sitemap = (): MetadataRoute.Sitemap => {
  return [
    {
      url: toString(new URL("/", BASE_URL)),
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: HOME_PRIORITY,
    },
    {
      url: toString(new URL("/agents/", BASE_URL)),
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: AGENTS_PRIORITY,
    },
  ];
};

export default sitemap;
