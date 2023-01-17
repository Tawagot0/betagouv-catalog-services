import Fastify from "fastify";

const app = Fastify({
  logger: false,
});

app.register(import("./index"), {
  prefix: "/",
});

export default async (req: any, res: any) => {
  await app.ready();
  app.server.emit("request", req, res);
};
