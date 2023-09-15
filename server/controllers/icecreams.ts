import express, { Request, Response } from "express";
import Icecream, { Icecreams } from "../models/Icecream";

const icecreamRouter = express.Router();
icecreamRouter.use(express.json());

icecreamRouter.get("/name/:name", async (request: Request, response: Response) => {
  const icecreamName = request.params.name;
  const icecream = await Icecream.findOne({ name: icecreamName }).exec();
  response.status(200).json(icecream);
});

icecreamRouter.get("/", async (request: Request, response: Response) => {
  const icecreams = await Icecream.find({});
  response.status(200).json(icecreams);
});

icecreamRouter.get("/suggestions/:quantity", async (request: Request, response: Response) => {
  const suggestionQuantity = Number(request.params.quantity);
  const icecreams = await Icecream.find({});

  if (suggestionQuantity > icecreams.length) {
    response.status(200).json(icecreams);
    return;
  }

  let suggestions: Icecreams[] = [];
  const indices = new Set<number>();

  while (indices.size < suggestionQuantity) {
    const index = Math.floor(Math.random() * icecreams.length);
    indices.add(index);
  }

  for (const index of indices) {
    suggestions.push(icecreams[index]);
  }

  response.status(200).json(suggestions);
});

icecreamRouter.get("/id/:id", async (request: Request, response: Response) => {
  const iceID = request.params.id;
  const icecream = await Icecream.findById(iceID);
  response.status(200).json(icecream);
});

icecreamRouter.post("/", async (request: Request, response: Response) => {
  try {
    const body = request.body;

    if (!body.name) {
      response.status(400).json({
        error: "content missing",
      });
      return;
    }

    const icecream = new Icecream({ ...request.body });

    const insertedIcecream = await icecream.save();
    response.status(201).json(insertedIcecream);
  } catch (error) {
    response.status(400).json({ error });
  }
});

export default icecreamRouter;
