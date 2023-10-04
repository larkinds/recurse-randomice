import express, { Express, Request, Response } from 'express';
import dbConnect from './lib/dbConnect';
import { PORT } from './utils/config';
import icecreamRouter from './controllers/icecreams';
import userRouter from './controllers/users';
import orderItemRouter from './controllers/orderitems';
import phraseRouter from './controllers/phrases';
import toppingRouter from './controllers/toppings';
import hofRouter from './controllers/halloffame';
import cors from "cors"


const app: Express = express();
const port = PORT;

app.use(cors());
app.use('/api/icecreams', icecreamRouter);
app.use('/api/users', userRouter);
app.use('/api/orderitems', orderItemRouter)
app.use('/api/words', phraseRouter)
app.use('/api/toppings', toppingRouter);
app.use('/api/hof', hofRouter)


const start = async () => {
  try {
    await dbConnect()
    console.log("connected to DB")
    app.listen(port, () => console.log(`Server started on port ${port}`));
  } catch (error) {
    console.error(error);
    process.exit(1);
  }
};

start();
