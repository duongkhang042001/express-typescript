import mongoose from "mongoose";

export async function connectToDatabase(url: string) {
    try {
        mongoose.set("strictQuery", true);
        await mongoose.connect(url, {}, (err) => {
            if (err) throw err;
            console.log("⚡️ [Server]: MongoDB is connected");
        });
    } catch (error) {
        console.log(error);
    }
}
