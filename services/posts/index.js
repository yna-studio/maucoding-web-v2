import { clientApiCaller } from "@helpers/clientApiCaller";
import { objToQuery } from "@helpers/stringManager";

export const fetchPosts = async ({ query }) => {
  const Response = await clientApiCaller({
    endpoint: `/api/posts?${objToQuery(query)}`,
  });
  return Response;
};

export const fetchPostDetail = async ({ postId }) => {
  const Response = await clientApiCaller({
    endpoint: `/api/post/${postId}`,
  });
  return Response;
};
