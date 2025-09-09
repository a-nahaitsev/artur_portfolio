import { exitPreview } from "@prismicio/next/pages";
import { NextApiRequest, NextApiResponse } from "next";

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  return exitPreview({ req, res });
}
