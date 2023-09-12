import Icecream, { Icecreams } from "../models/Icecream";
import express, { Request, Response } from 'express'

const icecreamRouter = express.Router()
icecreamRouter.use(express.json())

icecreamRouter.get('/name/:name',  async (request: Request, response: Response) => {
  const iceName = request.params.name
  const icecream = await Icecream.findOne({name: iceName}).exec()
  response.status(200).json(icecream).send()
})

icecreamRouter.get('/',  async (request: Request, response: Response) => {
  // const body = request.body;
  const icecreams = await Icecream.find({})
  response.status(200).json(icecreams).send()
})

icecreamRouter.get('/suggestion/:quantity',  async (request: Request, response: Response) => {
  const suggestionQuantity = Number(request.params.quantity)
  const icecreams = await Icecream.find({})
  let suggestions: Icecreams[] = [];
  for(let i = 0; i < suggestionQuantity; i++) {
    suggestions.push(icecreams[Math.floor(Math.random()*icecreams.length)])
  }
  response.status(200).json(suggestions).send()
})

icecreamRouter.get('/id/:id',  async (request: Request, response: Response) => {
  const iceID = request.params.id
  const icecream = await Icecream.findById(iceID)
  response.status(200).json(icecream).send()
})

icecreamRouter.post('/', async (request: Request, response: Response) => {
    try{
    const body = request.body
  
    if (!body.name) {
      response.status(400).json({ 
        error: 'content missing' 
      }).send()
    }
  
    const icecream = new Icecream({ ...request.body  })
  
    const insertedIcecream = await icecream.save();
    response.status(201).json(insertedIcecream).send();

    } catch (error) {
        console.log(error)
        response.status(400).json({error}).send("message")
    }
  })

export default icecreamRouter