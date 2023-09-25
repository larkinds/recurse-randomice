import OrderItem from "../models/OrderItem";
import express, { Request, Response } from "express";

const orderItemRouter = express.Router();
orderItemRouter.use(express.json());

orderItemRouter.get("/orderId/:orderId", async (request: Request, response: Response) => {
  const orderId = request.params.orderId;
  const orderItem = await OrderItem.find({ orderId: orderId }).exec();
  response.status(200).json(orderItem);
});

orderItemRouter.post("/", async (request: Request, response: Response) => {
  try {
    const body = request.body;

    if (!body.orderId) {
      response.status(400).json({
        error: "order id missing",
      });
    }

    const orderItem = new OrderItem({ ...request.body });

    const insertedOrderItem = await orderItem.save();
    response.status(201).json(insertedOrderItem);
  } catch (error) {
    response.status(400).json({ error });
  }
});

export default orderItemRouter;
