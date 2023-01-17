import type { FastifyReply, FastifyRequest } from "fastify";
import { readFile } from "fs/promises";
import { join } from "path";

async function readJsonFile(path: string): Promise<any> {
  const file = await readFile(path, "utf-8");
  return JSON.parse(file);
}

export default async function routes(fastify: any, options: any) {
  fastify.get(
    "/services",
    async (request: FastifyRequest, reply: FastifyReply) => {
      const path = join(__dirname, "..", "ressources", "services.json");
      const data = await readJsonFile(path);

      reply.send(data);
    }
  );
}
