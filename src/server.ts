import express, { Express } from "express";
import dotenv from "dotenv";
import routes from "./routes";
import { connectToDatabase } from "./config/database";

dotenv.config();

const main = async () => {
    const app: Express = express();
    const port = process.env.APP_PORT || 8000;

    app.use("/public", express.static("public"));

    app.use(express.json());

    app.get("/", (req, res) => res.send("Welcome to API!"));

    app.use("/v1", routes);

    await connectToDatabase(String(process.env.MONGODB_URL));

    app.listen(port, () => {
        console.log(
            `⚡️ [Server]: Server is running at http://localhost:${port}`
        );
    });
};

export { main };
