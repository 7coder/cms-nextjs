import { NextApiRequest, NextApiResponse } from "next";

import { getPosts } from "@/src/handlers/posts";
import { createPost } from "@/src/handlers/post";

const PostsApiHandler = (req: NextApiRequest, res: NextApiResponse) => {
  switch (req.method) {
    case "GET":
      return getPosts(req, res);
    case "POST":
      return createPost(req, res);
    default:
      return res.status(405).json({});
  }
};

export default PostsApiHandler;
