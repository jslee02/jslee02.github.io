import { localizedPath, locales } from "@/i18n/content";

const pages = ["/", "/software/", "/research/", "/cv/", "/contact/"];

export function GET() {
  const urls = locales
    .flatMap((locale) =>
      pages.map(
        (page) => `
  <url>
    <loc>https://jeongseok.dev${localizedPath(locale, page)}</loc>
  </url>`,
      ),
    )
    .join("");

  return new Response(
    `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">${urls}
</urlset>`,
    {
      headers: {
        "Content-Type": "application/xml",
      },
    },
  );
}
