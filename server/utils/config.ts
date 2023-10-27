import dotenv from "dotenv";
dotenv.config();

export const PORT = process.env.PORT;
export const MONGODB_URI = process.env.MONGODB_URI;
export const HF_TOKEN = process.env.HF_TOKEN;
export const FIREBASE_KEY = process.env.FIREBASE_KEY;
