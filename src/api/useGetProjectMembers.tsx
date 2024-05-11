import { useQuery } from "@tanstack/react-query";
import Gitlab from "@/lib/api";
export const useGetProjectMembers = (projectId: number) => {
  return useQuery({
    queryKey: ["membership", projectId],
    queryFn: async () => await Gitlab.api?.ProjectMembers.all(projectId),
  });
};
