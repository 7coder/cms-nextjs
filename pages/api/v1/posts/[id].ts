import { NextApiRequest, NextApiResponse } from "next";
import { getPostById } from "@/src/handlers/post";
import { withProtect } from "@/src/utils/handlerProtector";

const PostApiHandler = (req: NextApiRequest, res: NextApiResponse) => {
  switch (req.method) {
    case "GET":
      return withProtect(getPostById)(req, res);
    default:
      return res.status(405).json({});
  }
};

export default PostApiHandler;
