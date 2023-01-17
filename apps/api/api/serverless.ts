// https://www.fastify.io/docs/latest/Guides/Serverless/

import Fastify from "fastify";

const app = Fastify({
  logger: true,
});

app.register(import("../src"));

export default async (req: any, res: any) => {
  await app.ready();
  app.server.emit("request", req, res);
};
