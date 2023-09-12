import express, { Express, Request, Response } from 'express';
import dbConnect from './lib/dbConnect';
import { PORT } from './utils/config';
import icecreamRouter from './controllers/icecreams';
import userRouter from './controllers/users';
import orderRouter from './controllers/orders';

const app: Express = express();
const port = PORT;

app.use('/api/icecreams', icecreamRouter);
app.use('/api/users', userRouter);
app.use('/api/orders', orderRouter);


const start = async () => {
  try {
    await dbConnect()
    console.log("connected to DB")
    app.listen(port, () => console.log(`Server started on port ${PORT}`));
  } catch (error) {
    console.error(error);
    process.exit(1);
  }
};

start();

