import express, { Request, Response } from "express";
import User from "../models/User";
import * as argon2 from "argon2";

const userRouter = express.Router();
userRouter.use(express.json());

userRouter.post("/", async (request: Request, response: Response) => {
  try {
    const { username, password } = request.body;

    if (!username) {
      response
        .status(400)
        .json({
          error: "username missing",
        })
        .send();
    }

    const hashedpassword = await argon2.hash(password);

    const user = new User({
      username: username,
      password: hashedpassword,
    });

    console.log(user);

    const insertedUser = await user.save();
    response.status(201).json(insertedUser).send();
  } catch (error) {
    console.log(error);
    response.status(400).json({ error }).send("message");
  }
});

userRouter.post("/login", async (request: Request, response: Response) => {
  try {
    const { username, password } = request.body;

    if (!username) {
      response
        .status(400)
        .json({
          error: "username missing",
        })
        .send();
    }
    const user = await User.findOne({ username });

    const match = await argon2.verify(user.password, password);

    if (!match) {
      throw new Error("Unauthorized");
    }

    response.status(200).json("Valid login").send();
  } catch (error) {
    console.log(error);
    response.status(400).json({ error }).send("message");
  }
});

export default userRouter;
