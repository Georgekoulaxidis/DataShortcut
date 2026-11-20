import fastify, { FastifyInstance } from "fastify";
import { healthRoutes } from "./routes-health";

export async function startServer(port: number): Promise<FastifyInstance> {
    const server = fastify()
    server.register(healthRoutes)
    server.listen({ port }, (err, address) => {
        if (err) {
            console.error(err);
            process.exit(1);
        }
        console.log("Server is listening at " + address);
    })

    return server
}