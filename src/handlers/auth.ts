import { NextApiRequest, NextApiResponse } from "next";
import { ErrorResponse, SuccessResponse } from "../types/response";
import jwt from "jsonwebtoken";
import { PIN } from "../types/auth";
import logger from "../utils/logger";
import cookie from "cookie";

export const login = async (
  req: NextApiRequest,
  res: NextApiResponse<ErrorResponse | SuccessResponse>
) => {
  const pin: PIN = req.body.pin;

  if (pin !== process.env.PIN)
    return res.status(401).json({ message: "Invalid PIN" });

  try {
    const token = jwt.sign(
      {
        data: "awesome",
      },
      process.env.TOKEN_SECRET as string,
      { expiresIn: "8h" }
    );

    const serializedCookie = cookie.serialize("token", token, {
      httpOnly: true,
      sameSite: "strict",
      maxAge: 60 * 60 * 8,
      path: "/",
    });

    res.setHeader("Set-Cookie", serializedCookie);
    res.status(200).json({ message: "OK" });
  } catch (e) {
    logger.write(e);
    res.status(500).json({ message: "Internal error" });
  }
};

export const logout = async (
  req: NextApiRequest,
  res: NextApiResponse<ErrorResponse | SuccessResponse>
) => {
  const serializedExpiredCookie = cookie.serialize("token", "", {
    maxAge: -1,
    path: "/",
  });

  res.setHeader("Set-Cookie", serializedExpiredCookie);
  res.status(200).json({ message: "OK" });
};
