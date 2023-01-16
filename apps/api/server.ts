import fastify from "fastify";
import cors from "@fastify/cors";
import { readFile } from "fs/promises";
import { join } from "path";

const app = fastify({
  logger: true,
});

app.register(cors);

app.get("/services", async (request, reply) => {
  const path = join(__dirname, "ressources", "services.json");
  const data = await readJsonFile(path);

  reply.send(data);
});

app.listen({ port: 7000 });

async function readJsonFile(path: string): Promise<any> {
  const file = await readFile(path, "utf-8");
  return JSON.parse(file);
}
