import { Request, Response, Router } from "express";

export const userRoute = Router();

userRoute.get("/users", (req: Request, res: Response) => {
  return res.send("User Router");
});
