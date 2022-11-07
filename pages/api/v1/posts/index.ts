import { NextApiRequest, NextApiResponse } from "next";

import { getPosts } from "@/src/handlers/posts";
import { createPost } from "@/src/handlers/post";
import { withProtect } from "@/src/utils/handlerProtector";

const PostsApiHandler = async (req: NextApiRequest, res: NextApiResponse) => {
  switch (req.method) {
    case "GET":
      return await getPosts(req, res);
    case "POST":
      return await withProtect(createPost)(req, res);
    default:
      return res.status(405).json({});
  }
};

export default PostsApiHandler;
