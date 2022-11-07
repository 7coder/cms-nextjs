import { NextApiRequest, NextApiResponse } from "next";
import jwt from "jsonwebtoken";
import logger from "@/src/utils/logger";

export const jwtTokenVeryfier = async (
  req: NextApiRequest,
  res: NextApiResponse
) => {
  const token = req.cookies.token;
  const url = req.url as string;
  const method = req.method as string;

  if (!token) throw new Error("Invalid token");

  try {
    jwt.verify(token, process.env.TOKEN_SECRET as string);
    return;
  } catch (error) {
    logger.write(error);
    throw new Error("Internal error on token validation");
  }
};
