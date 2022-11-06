import sqlite3 from "sqlite3";
import { open } from "sqlite";

import { NextApiRequest, NextApiResponse } from "next";
import { Post } from "../types/post";
import { ResponseError } from "../types/error";
import logger from "../utils/logger";

export const getPosts = async (
  req: NextApiRequest,
  res: NextApiResponse<Post[] | [] | ResponseError>
) => {
  try {
    const db = await open({
      filename: "./db.sqlite",
      driver: sqlite3.Database,
    });
    const result = await db.all("SELECT * FROM Post");
    res.status(200).json(result);
  } catch (error) {
    logger.write(error);
    res.status(500).json({ message: "Internal Error" });
  }
};
