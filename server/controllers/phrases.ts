import Nouns from "../models/Nouns";
import Adjectives from "../models/Adjectives";

import express, { Request, Response } from 'express'

const phraseRouter = express.Router()
phraseRouter.use(express.json())

phraseRouter.get('/noun',  async (request: Request, response: Response) => {
  var random = Math.floor(Math.random() * 3)
  const noun = await Nouns.findOne().skip(random).exec()
  response.status(200).json(noun).send()
})


phraseRouter.get('/adjective',  async (request: Request, response: Response) => {
  var random = Math.floor(Math.random() * 3)
  const adjective = await Adjectives.findOne().skip(random).exec()
  response.status(200).json(adjective).send()
})

phraseRouter.post('/noun',  async (request: Request, response: Response) => {
  try{
    const body = request.body
  
    if (!body.name) {
      response.status(400).json({ 
        error: 'noun is missing' 
      }).send()
    }
  
    const noun = new Nouns({ ...request.body  })
  
    const insertedNoun= await noun.save();
    response.status(201).json(insertedNoun).send();

    } catch (error) {
        console.log(error)
        response.status(400).json({error}).send("message")
    }
  })

phraseRouter.post('/adjective',  async (request: Request, response: Response) => {
  try{
    const body = request.body
  
    if (!body.name) {
      response.status(400).json({ 
        error: 'noun is missing' 
      }).send()
    }
  
    const adjective = new Adjectives({ ...request.body  })
  
    const insertedAdjective= await adjective.save();
    response.status(201).json(insertedAdjective).send();

    } catch (error) {
        console.log(error)
        response.status(400).json({error}).send("message")
    }
  })

export default phraseRouter
