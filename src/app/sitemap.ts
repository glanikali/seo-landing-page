import { BASE_URL } from "@/lib/constants";
import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: BASE_URL,
      lastModified: "2021-01-01",
      changeFrequency: "weekly",
      priority: 0.5,
    },
  ];
}
