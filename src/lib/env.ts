import z from "zod";

const envSchema = z.object({
  url: z.string().optional(),
  token: z.string().optional(),
});
console.log("====================================");
console.log(import.meta.env);
console.log("====================================");
export const envClient = envSchema.parse({
  url: import.meta.env.API_URL,
  token: "glpat-6wzvG6MZ4x2E-bW-Y9NC",
});

export const updateToken = (token: string) => {
  localStorage.setItem("token", token);
  envClient.token = token;
};
