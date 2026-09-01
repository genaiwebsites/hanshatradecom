import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
      },
      {
        userAgent: ["GPTBot", "ChatGPT-User", "PerplexityBot", "ClaudeBot", "anthropic-ai", "Google-Extended", "Bingbot"],
        allow: "/",
      },
    ],
    sitemap: "https://hanshatradecom.com/sitemap.xml",
    host: "https://hanshatradecom.com",
  };
}
