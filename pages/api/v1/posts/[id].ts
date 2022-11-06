import { NextApiRequest, NextApiResponse } from "next";
import { getPostById } from "@/src/handlers/post";

const PostApiHandler = (req: NextApiRequest, res: NextApiResponse) => {
  switch (req.method) {
    case "GET":
      return getPostById(req, res);
    default:
      return res.status(405).json({});
  }
};

export default PostApiHandler;
