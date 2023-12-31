import Topping from "../models/Toppings";
import express, { Request, Response } from "express";

const toppingRouter = express.Router();
toppingRouter.use(express.json());

toppingRouter.get("/", async (request: Request, response: Response) => {
  const toppings = await Topping.find({});
  response.status(200).json(toppings);
});

// DEV ONLY: use this to insert array of toppings
// toppingRouter.post('/', async (request: Request, response: Response) => {
//     try{
//     const body = request.body
//     const insertedToppings = []
//     for(const topping of body) {
//         const newTopping = new Topping({ ...topping  })

//         const insertedTopping = await newTopping.save();
//         insertedToppings.push(insertedTopping)
//     }
//     response.status(201).json(insertedToppings);

//     } catch (error) {
//         console.log(error)
//         response.status(400).json({error});
//     }
//   })

export default toppingRouter;
