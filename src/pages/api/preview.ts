import { createClient } from "../../prismicio";
import { setPreviewData, redirectToPreviewURL } from "@prismicio/next/pages";
import { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  const client = createClient({ req });

  setPreviewData({ req, res });

  return await redirectToPreviewURL({ req, res, client });
}
