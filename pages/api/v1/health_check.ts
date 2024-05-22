import type { NextApiRequest, NextApiResponse } from "next";
import { createRouter } from "next-connect";

const router = createRouter<NextApiRequest, NextApiResponse>();

router.get((req, res) => {
  return res.status(200).json({ message: "Im up and running!" });
});

export default router.handler({
  onError: (err, req, res) => {
    return res.status(500).json({ message: "Interal server error!" });
  },
});
