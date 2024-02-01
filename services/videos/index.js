import { clientApiCaller } from "@helpers/clientApiCaller";
import { objToQuery } from "@helpers/stringManager";

export const endpointGetVideoDetail = (id) => {
  return `/api/video/${id}`;
};

/**
 * function to request video list
 */
export const fetchVideos = async ({ query }) => {
  const Response = await clientApiCaller({
    endpoint: `/api/videos?${objToQuery(query)}`,
  });
  return Response;
};

/**
 * function to request video detail
 */
export const fetchVideoDetail = async ({ videoId }) => {
  const Response = await clientApiCaller({
    endpoint: endpointGetVideoDetail(videoId),
  });
  return Response;
};
