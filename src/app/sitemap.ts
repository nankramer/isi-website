import { MetadataRoute } from "next";

const BASE_URL = "https://isintusamakhosi.co.za";

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
