import { createClient } from "./client.server";
import { GET_PROJECTS, type Project } from "./project.gql";
import { createSessionContextCookie } from "./utils.server";

export async function getProjects(token: string) {
  const apollo = createClient(token)
  const { data } = await apollo.query<{ projects: Project[] }>({
    query: GET_PROJECTS
  });

  return data;
}
