import { NextApiRequest, NextApiResponse } from "next";

import { getPosts } from "@/src/handlers/posts";
import { createPost } from "@/src/handlers/post";

const PostsApiHandler = async (req: NextApiRequest, res: NextApiResponse) => {
  switch (req.method) {
    case "GET":
      return await getPosts(req, res);
    case "POST":
      return createPost(req, res);
    default:
      return res.status(405).json({});
  }
};

export default PostsApiHandler;
