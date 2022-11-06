import { NextApiRequest, NextApiResponse } from "next";
import { Post } from "../types/post";

export const createPost = (req: NextApiRequest, res: NextApiResponse<Post>) => {
  res.status(200).json({
    id: 1,
    title: "test 1",
    content: "some content",
    createdAt: new Date(),
  });
};

export const getPostById = (
  req: NextApiRequest,
  res: NextApiResponse<Post>
) => {
  res.status(200).json({
    id: 1,
    title: "test 1",
    content: "some content",
    createdAt: new Date(),
  });
};
