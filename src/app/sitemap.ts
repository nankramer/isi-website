import { MetadataRoute } from "next";

const BASE_URL = "https://isintusamakhosi.org"; // Update with actual domain

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = [
    "",
    "/about",
    "/our-work",
    "/traditional-leadership",
    "/rural-development",
    "/news",
    "/get-involved",
  ];

  return routes.map((route) => ({
    url: `${BASE_URL}${route}`,
    lastModified: new Date().toISOString(),
    changeFrequency: route === "/news" ? "weekly" : "monthly",
    priority: route === "" ? 1 : 0.8,
  }));
}
