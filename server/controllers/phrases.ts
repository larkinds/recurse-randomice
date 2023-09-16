import Nouns from '../models/Nouns'
import Adjectives from '../models/Adjectives'
import nouns from '../nouns'
import adjectives from '../adjectives'

import express, { Request, Response } from 'express'

const phraseRouter = express.Router()
phraseRouter.use(express.json())

phraseRouter.get('/noun', async (request: Request, response: Response) => {
  var random = Math.floor(Math.random() * 750)
  const noun = await Nouns.findOne().skip(random).exec()
  response.status(200).json(noun).send()
})

phraseRouter.get('/adjective', async (request: Request, response: Response) => {
  var random = Math.floor(Math.random() * 500)
  const adjective = await Adjectives.findOne().skip(random).exec()
  response.status(200).json(adjective).send()
})

phraseRouter.post('/noun', async (request: Request, response: Response) => {
  try {
    const body = request.body

    if (!body.name) {
      response
        .status(400)
        .json({
          error: 'noun is missing',
        })
        .send()
    }

    const noun = new Nouns({ ...request.body })

    const insertedNoun = await noun.save()
    response.status(201).json(insertedNoun).send()
  } catch (error) {
    console.log(error)
    response.status(400).json({ error }).send('message')
  }
})

phraseRouter.post(
  '/adjective',
  async (request: Request, response: Response) => {
    try {
      const body = request.body

      if (!body.name) {
        response
          .status(400)
          .json({
            error: 'noun is missing',
          })
          .send()
      }

      const adjective = new Adjectives({ ...request.body })

      const insertedAdjective = await adjective.save()
      response.status(201).json(insertedAdjective).send()
    } catch (error) {
      console.log(error)
      response.status(400).json({ error }).send('message')
    }
  }
)

phraseRouter.post(
  '/insertAdjectives',
  async (request: Request, response: Response) => {
    try {
      const allAdjectives: Object[] = []
      const noDupes = [...new Set<string>(adjectives)]
      // the mongoose insertMany function had a strange batch size limit so we could do only 500/1093
      for (let i = 0; i < 500; i++) {
        allAdjectives[i] = {
          name: noDupes[i],
          count: 0,
        }
      }

      console.log(noDupes.length)

      const insertedAdjectives = await Adjectives.insertMany(allAdjectives)
      response.status(201).json(insertedAdjectives).send()
    } catch (error) {
      console.log(error)
      response.status(400).json({ error }).send('message')
    }
  }
)

phraseRouter.post(
  '/insertNouns',
  async (request: Request, response: Response) => {
    try {
      const allNouns: Object[] = []
      const noDupes = [...new Set<string>(nouns)]
      // the mongoose insertMany function had a strange batch size limit so we could do only 750/2333
      for (let i = 0; i < 750; i++) {
        allNouns[i] = {
          name: noDupes[i],
          count: 0,
        }
      }

      console.log(noDupes.length)

      const insertedNouns = await Nouns.insertMany(allNouns)
      response.status(201).json(insertedNouns).send()
    } catch (error) {
      console.log(error)
      response.status(400).json({ error }).send('message')
    }
  }
)
export default phraseRouter
