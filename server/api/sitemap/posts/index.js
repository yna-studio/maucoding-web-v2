import { sitemapGenerator } from "../../../helpers/XMLGenerator";

export default defineEventHandler(async (event) => {
  const params = [{ link: "/232" }, { link: "/232" }];
  return sitemapGenerator(params);
});
