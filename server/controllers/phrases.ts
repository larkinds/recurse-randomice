import Nouns from "../models/Nouns";
import Adjectives from "../models/Adjectives";

import express, { Request, Response } from 'express'

const phraseRouter = express.Router()
phraseRouter.use(express.json())

phraseRouter.get('/noun',  async (request: Request, response: Response) => {
  var random = Math.floor(Math.random() * 1000)
  const noun = await Nouns.findOne().skip(random).exec()
  response.status(200).json(noun).send()
})



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
//     response.status(201).json(insertedToppings).send();


//     } catch (error) {
//         console.log(error)
//         response.status(400).json({error}).send("message")
//     }
//   })

export default adjectiveRouter
