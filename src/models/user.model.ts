import mongoose from "mongoose";
import bcrypt from "bcryptjs";

export interface I_UserDocument extends mongoose.Document {
  username: string;
  name: string;
  password: string;
}

const UserSchema: mongoose.Schema<I_UserDocument> = new mongoose.Schema({
  username: { type: String, unique: true },
  password: { type: String },
  name: { type: String },
});

const saltRounds = 8;

UserSchema.pre("save", async function (next) {
  if (this.isModified("password")) {
    this.password = await bcrypt.hash(this.password, saltRounds);
  }
  next();
});

const UserModel = mongoose.model<I_UserDocument>("User", UserSchema);

export default UserModel;
