import Axios from "axios";

const defaultHeaders = {};

const AxiosInstance = Axios.create({
  timeout: 5000,
});

export const baseApiCaller = ({
  method = "get",
  baseURL,
  endpoint,
  headers = {},
}) => {
  return AxiosInstance({
    method,
    baseURL: baseURL || "/",
    url: endpoint,
    headers: { ...defaultHeaders, ...headers },
  }).catch((e) => {
    // console.error("Request Error", e);
  });
};
