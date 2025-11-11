import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://www.iiotedge.com";
  return [
    { url: `${base}/`, priority: 1.0, changeFrequency: "monthly" },
  ];
}


