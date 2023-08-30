import SealMiddleware from "seal-middleware";
import { baseApiCaller } from "../baseApiCaller";
import { RESPONSE_GENERAL_ERROR } from "~/consts/responses/responses";

export const clientApiCaller = (params) => {
  const { APP_KEY } = useRuntimeConfig().public;
  const Seal = new SealMiddleware(APP_KEY, 10000);

  params.baseURL = process.env.MCDG_WEB_HOST || "";
  params.headers = {
    seal: Seal.generateSeal(),
  };
  return new Promise(async (resolve) => {
    const Request = await baseApiCaller(params);
    resolve(Request && Request.data ? Request.data : RESPONSE_GENERAL_ERROR);
  });
};
