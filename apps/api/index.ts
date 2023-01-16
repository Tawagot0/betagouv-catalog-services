import {
  FastifyInstance,
  FastifyReply,
  FastifyRequest,
  FastifyServerOptions,
} from "fastify";

import { readFile } from "fs/promises";
import { join } from "path";

interface IQueryString {
  name: string;
}

interface IParams {
  name: string;
}

interface CustomRouteGenericParam {
  Params: IParams;
}

interface CustomRouteGenericQuery {
  Querystring: IQueryString;
}

async function readJsonFile(path: string): Promise<any> {
  const file = await readFile(path, "utf-8");
  return JSON.parse(file);
}

export default async function (
  instance: FastifyInstance,
  opts: FastifyServerOptions,
  done
) {
  instance.get("/services", async (req: FastifyRequest, res: FastifyReply) => {
    const path = join(__dirname, "ressources", "services.json");
    const data = await readJsonFile(path);
    res.status(200).send({
      data,
    });
  });

  done();
}
