import { sitemapGenerator } from "../../../../helpers/XMLGenerator";

const tags = [
  "reactjs",
  "vuejs",
  "go",
  "javascript",
  "flask",
  "echo",
  "python",
  "nuxtjs",
  "express",
];

export default defineEventHandler(async (event) => {
  const params = [];

  tags.map((n) => {
    params.push({ path: `/tag/${n}` });
  });

  // ref: https://dev.to/rafaelmagalhaes/creating-rss-feed-with-nuxt-3-5oj
  event.node.res.setHeader("content-type", "text/xml"); // we need to tell nitro to return this as a xml file
  event.node.res.end(sitemapGenerator(params)); // send the HTTP response
});
