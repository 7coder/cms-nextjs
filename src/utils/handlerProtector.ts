import { NextApiRequest, NextApiResponse } from "next";
import { jwtTokenVeryfier } from "@/src/utils/authenticator";

export const withProtect =
  (handler: Function) => async (req: NextApiRequest, res: NextApiResponse) => {
    try {
      await jwtTokenVeryfier(req, res);
    } catch (err) {
      return res.status(401).json({ message: "Not authorized" });
    }

    return await handler(req, res);
  };
