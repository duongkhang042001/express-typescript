import { Server } from "http";
import express, { Express } from "express";
import { AddressInfo } from "net";

let connection: Server;

async function startWebServer() {
    const expressApp: Express = express();

    const APIAddress = await openConnection(expressApp);
    return APIAddress;
}


async function stopWebServer() {
    return new Promise<void>((resolve) => {
        if (connection !== undefined) {
            connection.close(() => {
                resolve();
            });
        }
    });
}

async function openConnection(
    expressApp: express.Application
): Promise<AddressInfo> {
    return new Promise((resolve) => {
        connection = expressApp.listen(3000, () => {
            resolve(connection.address() as AddressInfo);
        });
    });
}

process.on("SIGINT", async () => {
    await stopWebServer();
    process.exit(0);
});

process.on("SIGTERM", async () => {
    await stopWebServer();
    process.exit(0);
});

export { startWebServer, stopWebServer };