import type { ProjectSchema } from "@gitbeaker/rest";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { useGetProjectMembers } from "@/api/useGetProjectMembers";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { getNames } from "@/lib/string";

export const ProjectCard = ({
  name_with_namespace,
  description,
  id,
}: ProjectSchema) => {
  const { data, isLoading } = useGetProjectMembers(id);
  return (
    <Card className="flex-1">
      <CardHeader>
        <CardTitle>{name_with_namespace}</CardTitle>
        <CardDescription>{description}</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="flex">
          {data?.map(({ id, name, username, avatar_url }) => {
            return (
              <Avatar key={id}>
                <AvatarImage src={avatar_url} alt={`@${username}`} />
                <AvatarFallback>{getNames(name, "")}</AvatarFallback>
              </Avatar>
            );
          })}
        </div>
      </CardContent>
    </Card>
  );
};
