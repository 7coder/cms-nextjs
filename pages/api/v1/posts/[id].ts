import { NextApiRequest, NextApiResponse } from "next";
import { Post } from "@/src/types/post";

const PostApiHandler = (req: NextApiRequest, res: NextApiResponse<Post>) => {
  res.status(200).json({
    id: 1,
    title: "test 1",
    content: "some content",
    createdAt: new Date(),
  });
};

export default PostApiHandler;
