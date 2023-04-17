import { DocumentDefinition } from "mongoose";
import UserModel, { I_UserDocument } from "../models/user.model";

export async function login(user: DocumentDefinition<I_UserDocument>) {
  return await UserModel.findOne({ username: user.username });
}

export async function register(user: DocumentDefinition<I_UserDocument>) {
  return await UserModel.findOne({ username: user.username });
}
