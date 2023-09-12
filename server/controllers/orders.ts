import express, { Request, Response, NextFunction } from 'express'
import Orders from '../models/Orders'
import * as argon2 from 'argon2'

const orderRouter = express.Router()
orderRouter.use(express.json())


orderRouter.post('/', async(req: Request, res: Response, next: NextFunction) => {
    try{
        console.log(req.body)
        const body = req.params
      
        if (!body.userID) {
          res.status(400).json({ 
            error: 'content missing' 
          }).send()
        }
      
        const order = new Orders({ ...req.body  })
      
        const insertedOrder = await order.save();
        res.status(201).json(insertedOrder).send();
    
        } catch (error) {
            console.log(error)
            res.status(400).json({error}).send("message")
        }
      }) 




export default orderRouter
