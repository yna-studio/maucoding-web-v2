const { MCDG_WEB_HOST } = useRuntimeConfig().public;
export const sitemapGenerator = (data = []) => {
  let sitemaps = "";
  data.map((n) => {
    sitemaps += `<url>
    <loc>${MCDG_WEB_HOST}${n.path}</loc>
    <lastmod>${n.lastmod || "2023-10-01"}</lastmod>
    <changefreq>daily</changefreq>
    <priority>0.8</priority>
</url>`;
  });
  return `<?xml version="1.0" encoding="UTF-8"?><urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">${sitemaps}</urlset>`;
};
