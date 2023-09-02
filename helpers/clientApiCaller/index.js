import SealMiddleware from "../../helpers/sealMiddleware";
import { baseApiCaller } from "../baseApiCaller";
import { RESPONSE_GENERAL_ERROR } from "~/consts/responses/responses";

export const sealGenerator = () => {
  const { APP_KEY } = useRuntimeConfig().public;
  const Seal = new SealMiddleware(APP_KEY, 10000);
  return Seal.generateSeal();
};

export const clientApiCaller = (params) => {
  params.baseURL = process.env.MCDG_WEB_HOST || "";
  params.headers = {
    seal: sealGenerator(),
  };
  return new Promise(async (resolve) => {
    const Request = await baseApiCaller(params);
    resolve(Request && Request.data ? Request.data : RESPONSE_GENERAL_ERROR);
  });
};
