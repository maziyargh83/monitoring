import { localDB } from "@/lib/localDB";
import z from "zod";

const envSchema = z.object({
  url: z.string().optional(),
  token: z.string().optional(),
});
export const updateToken = (token: string) => {
  localDB.setItem("token", token);
  envClient.token = token;
};
export const getToken = () => {
  return localDB.getItem("token");
};
export const envClient = envSchema.parse({
  url: import.meta.env.VITE_API_URL,
  token: getToken(),
});
