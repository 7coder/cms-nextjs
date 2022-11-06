import { NextApiRequest, NextApiResponse } from "next";
import { Post } from "../types/post";

export const getPosts = (
  req: NextApiRequest,
  res: NextApiResponse<Post[] | []>
) => {
  res.status(200).json([
    {
      id: 1,
      title: "test 1",
      content: "some content",
      createdAt: new Date(),
    },
    {
      id: 2,
      title: "test 2",
      content: "some content",
      createdAt: new Date(),
    },
    {
      id: 3,
      title: "test 3",
      content: "some content",
      createdAt: new Date(),
    },
    {
      id: 4,
      title: "test 4",
      content: "some content",
      createdAt: new Date(),
    },
  ]);
};
