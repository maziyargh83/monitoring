import { useGetProjects } from "@/api/useGetProjects";
import { ProjectCard } from "@/components/Project/ProjectCard";
import { ProjectListSkelton } from "@/components/Project/ProjectListSkelton";

export const ProjectList = () => {
  const { isLoading, data } = useGetProjects();
  if (isLoading) return <ProjectListSkelton />;
  return (
    <div className="flex justify-between flex-wrap">
      {data?.map((card) => {
        return (
          <div key={card.id} className="w-1/2 p-2">
            <ProjectCard {...card} />
          </div>
        );
      })}
    </div>
  );
};
