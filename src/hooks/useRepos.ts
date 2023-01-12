import api from "../api/github";
import { QueryFunctionContext, useQuery } from "@tanstack/react-query";
import { Repository } from "./types";

async function fetchRepos(ctx: QueryFunctionContext) {
  const [_, userName] = ctx.queryKey; // ["repositories", userName]
  const { data } = await api.get<Repository[]>(`/users/${userName}/repos`);

  return data;
}

export function useFetchRepositories(userName: string) {
  console.log(userName);
  return useQuery(["repositories", userName], fetchRepos, {
    enabled: !!userName,
  });
}
