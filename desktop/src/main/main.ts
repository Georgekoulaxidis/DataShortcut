import { app } from 'electron'
import type { FastifyInstance } from "fastify"
import { startServer } from "./http/server"

let server: FastifyInstance | null = null

async function start(): Promise<void> {
    server = await startServer(3000)
}

app.whenReady()
.then(start)
.catch((err) => {
    console.error("Startup fatal error: " + err)
    app.quit()
});

app.on('before-quit', () => {
    server?.close()
})
