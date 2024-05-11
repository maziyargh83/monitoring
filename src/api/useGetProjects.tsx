import { useQuery } from "@tanstack/react-query";
import Gitlab from "@/lib/api";
export const useGetProjects = () => {
  return useQuery({
    queryKey: ["projects"],
    queryFn: async () =>
      await Gitlab.api?.Projects.all({
        membership: true,
      }),
  });
};
