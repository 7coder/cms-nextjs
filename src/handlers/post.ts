import { NextApiRequest, NextApiResponse } from "next";
import { Post, PostCreation } from "../types/post";
import { ErrorResponse } from "../types/response";
import logger from "../utils/logger";
import db from "../utils/db";

export const createPost = async (
  req: NextApiRequest,
  res: NextApiResponse<Post | ErrorResponse>
) => {
  try {
    const body: PostCreation = req.body;
    const dbCur = await db.getCur();
    await dbCur.run(
      "INSERT INTO Post (title, content, createdAt ) VALUES (?, ?, ?)",
      [body.title, body.content, new Date().toISOString()]
    );

    const result: Post | undefined = await dbCur.get(
      "SELECT * FROM Post WHERE title = ?",
      body.title
    );

    if (result) return res.status(200).json(result);

    logger.write({ message: "Post not found after saving" });

    res.status(404).json({ message: "Not found" });
  } catch (error) {
    logger.write(error);
    res.status(500).json({ message: "Something goes wrong" });
  }
};

export const getPostById = async (
  req: NextApiRequest,
  res: NextApiResponse<Post | ErrorResponse>
) => {
  try {
    const idParam: string = req.query.id as string;
    const dbCur = await db.getCur();

    const result: Post | undefined = await dbCur.get(
      "SELECT * FROM Post WHERE id = ?",
      idParam
    );

    if (result) return res.status(200).json(result);

    res.status(404).json({ message: "Not found" });
  } catch (error) {
    logger.write(error);
    res.status(500).json({ message: "Something goes wrong" });
  }
};
