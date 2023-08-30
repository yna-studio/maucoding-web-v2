import { baseApiCaller } from "../baseApiCaller";
import { RESPONSE_GENERAL_ERROR } from "../../consts/responses/responses";

export const serverApiCaller = (params) => {
  params.baseUrl = params.baseUrl || process.env.MCDG_BE_HOST;
  return new Promise(async (resolve) => {
    const Request = await baseApiCaller(params);
    return resolve(
      Request && Request.data ? Request.data : RESPONSE_GENERAL_ERROR
    );
  });
};
