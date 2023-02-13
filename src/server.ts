import express, { Express } from "express";
import dotenv from "dotenv";
import routes from "./routes";
import { connectToDatabase } from "./config/database";

dotenv.config();

const app: Express = express();
const port = process.env.APP_PORT || 8000;

app.use("/public", express.static("public"));

app.use(express.json());

app.use("/", routes);

connectToDatabase(
  "mongodb+srv://admin:EWZFKT3oHOjpF0Yb@cluster.wnew5tt.mongodb.net/express-ts?retryWrites=true&w=majority"
);

app.listen(port, () => {
  console.log(`⚡️ [Server]: Server is running at http://localhost:${port}`);
});
