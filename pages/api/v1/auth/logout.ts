import { NextApiRequest, NextApiResponse } from "next";

import { logout } from "@/src/handlers/auth";

const LogoutApiHandler = async (req: NextApiRequest, res: NextApiResponse) => {
  switch (req.method) {
    case "POST":
      return await logout(req, res);
    default:
      return res.status(405).json({});
  }
};

export default LogoutApiHandler;
