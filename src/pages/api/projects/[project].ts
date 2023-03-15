import { NextApiRequest, NextApiResponse } from "next";
import { projects } from "../../../../data";
import type { ProjectType, ResponseError } from "../../../../data";

export default function projectHandler(
  req: NextApiRequest,
  res: NextApiResponse<ProjectType | ResponseError>
) {
  const { query } = req;
  const { id } = query;
  const project = projects.find((p) => p.id === id);

  // Project with id exists
  return project
    ? res.status(200).json(project)
    : res.status(404).json({ message: `User with id: ${id} not found.` });
}
