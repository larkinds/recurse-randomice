import express, { Express, Request, Response } from 'express';
import dbConnect from './lib/dbConnect';
import { PORT } from './utils/config';
import icecreamRouter from './controllers/icecreams';
import userRouter from './controllers/users';
import orderItemRouter from './controllers/orderitems';
import toppingRouter from './controllers/toppings';

const app: Express = express();
const port = PORT;

app.use('/api/icecreams', icecreamRouter);
app.use('/api/users', userRouter);
app.use('/api/orderitems', orderItemRouter)
app.use('/api/toppings', toppingRouter);

const start = async () => {
  try {
    await dbConnect()
    console.log("connected to DB")
    app.listen(port, () => console.log("Server started on port 3000"));
  } catch (error) {
    console.error(error);
    process.exit(1);
  }
};

start();

