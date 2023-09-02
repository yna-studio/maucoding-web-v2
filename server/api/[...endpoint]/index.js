// import SealMiddleware from "../../../helpers/sealMiddleware";
import { objToQuery } from "../../../helpers/stringManager";
import { serverApiCaller } from "../../../helpers/serverApiCaller";

// const Seal = new SealMiddleware(process.env.APP_KEY, 10000);

export default defineEventHandler(async (event) => {
  const headers = getRequestHeaders(event);

  const { seal } = headers;
  const query = getQuery(event) || {};
  const endpoint = getRouterParams(event, "endpoint") || {};
  const reqParams = {
    baseURL: process.env.MCDG_BE_HOST,
    endpoint: `/api/${endpoint.endpoint}?${objToQuery(query)}`,
    headers: { seal },
  };
  const Res = await serverApiCaller(reqParams);
  return Res;
});
