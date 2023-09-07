import express from 'express';
import icecreamRouter from "./controllers/icecreams"

export const routes = express.Router();

routes.use("/api/icecreams", icecreamRouter);