// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";

import { ProjectType, projects } from "data";

export default function handler(
  _req: NextApiRequest,
  res: NextApiResponse<ProjectType[]>
) {
  res.status(200).json(projects);
}
