import mongoose from "mongoose";

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

const UserModel = mongoose.model<I_UserDocument>("User", UserSchema);

export default UserModel;
