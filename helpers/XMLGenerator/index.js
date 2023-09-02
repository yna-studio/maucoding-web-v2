const { MCDG_WEB_HOST } = useRuntimeConfig().public;

export const sitemapGenerator = (links = []) => {
  const sitemaps = "";
  links.map((n) => {
    sitemaps += `<url>
    <loc>${MCDG_WEB_HOST}${n.link}</loc>
    <lastmod>${n.lastmod || "2023-10-01"}</lastmod>
    <changefreq>daily</changefreq>
    <priority>0.8</priority>
</url>`;
  });
  return sitemaps;
};
