import type { MetadataRoute } from "next";

import { BASE_URL } from "@/utils/const";

const HOME_PRIORITY = 1;
const AGENTS_PRIORITY = 0.7;

export const dynamic = "force-static";

const sitemap = (): MetadataRoute.Sitemap => {
  return [
    { url: new URL("/", BASE_URL).toString(), changeFrequency: "monthly", priority: HOME_PRIORITY },
    { url: new URL("/agents/", BASE_URL).toString(), changeFrequency: "monthly", priority: AGENTS_PRIORITY },
  ];
};

export default sitemap;
