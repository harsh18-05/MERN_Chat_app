import mongoose from "mongoose";
import { config } from "dotenv";
config(); // Make sure this line exists

const uri = process.env.MONGODB_URI;
export const connectDB= async()=>{

    try { const conn=await mongoose.connect(uri);
        console.log(`MongoDB connected: ${conn.connection.host}`);
        
    } catch (error) {
        console.log(`MongoDB connection error :`,error);

    }
}