import { Router } from "express";
import * as authController from "@/controllers/auth.controller";

export const authRoute = Router();

authRoute.post("/auth/login", authController.login);
authRoute.post("/auth/register", authController.register);
