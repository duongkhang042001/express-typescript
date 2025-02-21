import { ExpressServer } from "./infrastructure/server/http";

const instance = new ExpressServer(3000);

instance.start();