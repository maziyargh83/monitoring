import { Home } from "@/page/home";
import { createFileRoute } from "@tanstack/react-router";
import ApiClient from "@/lib/api";
export const Route = createFileRoute("/")({
  loader: async () => {
    const res = await ApiClient.api?.Projects.all();
    console.log("====================================");
    console.log(res);
    console.log("====================================");
  },
  component: Home,
});
