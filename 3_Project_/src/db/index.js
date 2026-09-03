import mongoose from "mongoose";
import {DB_NAME} from "../constansts.js";

const connectDB = async () => {
    try {
        const connectionInstance=await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`);
        console.log(`MONGODB connected !! DB Host : ${connectionInstance.connection.host}`);
        // connection instance
    }
    catch (err) {
        console.log("MONGODB connection error", err);
        process.exit(1);
    }
};

export default connectDB;