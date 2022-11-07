import { NextApiRequest, NextApiResponse } from "next";

import { login } from "@/src/handlers/auth";

const LoginApiHandler = async (req: NextApiRequest, res: NextApiResponse) => {
  switch (req.method) {
    case "POST":
      return await login(req, res);
    default:
      return res.status(405).json({});
  }
};

export default LoginApiHandler;
