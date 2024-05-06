import z from "zod";

const envSchema = z.object({
  url: z.string(),
  token: z.string(),
});

export const envClient = envSchema.parse({
  url: import.meta.env.API_URL,
  token: localStorage.getItem("token"),
});

export const updateToken = (token: string) => {
  localStorage.setItem("token", token);
  envClient.token = token;
};
