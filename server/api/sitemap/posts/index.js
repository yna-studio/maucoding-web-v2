import { sitemapGenerator } from "../../../../helpers/XMLGenerator";
import { sealGenerator } from "../../../../helpers/clientApiCaller";
import { serverApiCaller } from "../../../../helpers/serverApiCaller";

export default defineEventHandler(async (event) => {
  const params = [];

  // start req to api
  const reqParams = {
    baseURL: process.env.MCDG_BE_HOST,
    endpoint: `/api/posts?limit=50&draft=false`,
    headers: { seal: sealGenerator() },
  };
  const Res = await serverApiCaller(reqParams);

  if (Res.status === 200) {
    console.log("results", Res.result);
    Res.result.map((n) =>
      params.push({
        path: `/post/${n.nospace_title}-${n._id}`,
      })
    );
  }

  // ref: https://dev.to/rafaelmagalhaes/creating-rss-feed-with-nuxt-3-5oj
  event.node.res.setHeader("content-type", "text/xml"); // we need to tell nitro to return this as a xml file
  event.node.res.end(sitemapGenerator(params)); // send the HTTP response
});
