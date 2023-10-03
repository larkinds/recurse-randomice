import express, { Request, Response, NextFunction } from "express";
import Orders from "../models/Orders";
import * as argon2 from "argon2";

const orderRouter = express.Router();
orderRouter.use(express.json());

orderRouter.post(
  "/",
  async (req: Request, res: Response, next: NextFunction) => {
    try {
      if (!req.body.userID) {
        res
          .status(400)
          .json({
            error: "content missing",
          })
          .send();
      }

      const order = new Orders({ ...req.body });

      const insertedOrder = await order.save();
      res.status(201).json(insertedOrder).send();
      return;
    } catch (error) {
      console.log(error);
      res.status(400).json({ error }).send("message");
    }
  }
);

orderRouter.get("/userID/:userID", async (req: Request, res: Response) => {
  try {
    const userID = req.params.userID;
    const order = await Orders.findOne({ userID: userID });
    res.status(200).json(order).send();
  } catch (error) {
    console.log(error);
    res.status(400).json({ error }).send("message");
  }
});

orderRouter.get("/id/:id", async (req: Request, res: Response) => {
  try {
    const orderID = req.params.id;
    const order = await Orders.findById(orderID);
    res.status(200).json(order).send();
  } catch (error) {
    console.log(error);
    res.status(400).json({ error }).send("message");
  }
});

orderRouter.get("/", async (req: Request, res: Response) => {
  try {
    const orders = await Orders.find({});
    res.status(200).json(orders).send();
  } catch (error) {
    console.log(error);
    res.status(400).json({ error }).send("message");
  }
});

export default orderRouter;
