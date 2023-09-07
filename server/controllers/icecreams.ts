import Icecream from "../models/Icecream";
import express, { Express, Request, Response } from 'express'

const icecreamRouter = express.Router()
icecreamRouter.use(express.json())

icecreamRouter.post('/api/icecreams', async (request: Request, response: Response) => {
    try{
    console.log("here in the router")
    const body = request.body
  
    if (!body.name) {
      return response.status(400).json({ 
        error: 'content missing' 
      })
    }
  
    const icecream = new Icecream({ ...request.body  })
  
    const insertedIcecream = await icecream.save();
    return response.status(201).json(insertedIcecream);
    } catch (error) {
        console.log(error)
        response.status(400).json({error}).send("message")
    }
  })

export default icecreamRouter