import { clientApiCaller } from "@helpers/clientApiCaller";
import { objToQuery } from "@helpers/stringManager";

export const endpointGetPostDetail = (id) => {
  return `/api/post/${id}`;
};

export const fetchPosts = async ({ query }) => {
  const Response = await clientApiCaller({
    endpoint: `/api/posts?${objToQuery(query)}`,
  });
  return Response;
};

export const fetchPostDetail = async ({ postId }) => {
  const Response = await clientApiCaller({
    endpoint: endpointGetPostDetail(postId),
  });
  return Response;
};
