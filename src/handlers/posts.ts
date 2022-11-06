import { NextApiRequest, NextApiResponse } from "next";
import { Post } from "../types/post";
import { ErrorResponse } from "../types/error";
import logger from "../utils/logger";
import db from "../utils/db";

export const getPosts = async (
  req: NextApiRequest,
  res: NextApiResponse<Post[] | [] | ErrorResponse>
) => {
  try {
    const dbCur = await db.getCur();
    const result = await dbCur.all("SELECT * FROM Post");
    res.status(200).json(result);
  } catch (error) {
    logger.write(error);
    res.status(500).json({ message: "Internal Error" });
  }
};
