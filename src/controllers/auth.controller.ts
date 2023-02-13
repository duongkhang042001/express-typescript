import { Request, Response } from "express";
import * as userService from "../services/auth.service";

export const login = async (req: Request, res: Response) => {
  const foundUser = await userService.login(req.body);
  return res.status(200).json(foundUser);
};

export const register = async (req: Request, res: Response) => {
  const newUser = await userService.register(req.body);
  return res.status(200).json(newUser);
};
