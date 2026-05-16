import copy from "@/copy/en.json";

export const BASE_URL = new URL(process.env.BASE_URL || `https://${copy.site.domain}`);
