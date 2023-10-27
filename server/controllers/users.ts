import express, { Request, Response } from "express";
import User from "../models/User";
import * as argon2 from "argon2";

const userRouter = express.Router();
userRouter.use(express.json());


userRouter.get("/username/:username", async (request: Request, response: Response) => {
  const userName = request.params.username;
  const userResponse = await User.findOne({ username: userName }).exec();
  if (userResponse){
    return response.status(200).json(true)}
  else{
    return response.status(200).json(false)}
  }
)

userRouter.post("/", async (request: Request, response: Response) => {
  try {
    const { username, password } = request.body;

    if (!username) {
      response.status(400).json({
        error: "username missing",
      });
    }

    const hashedpassword = await argon2.hash(password);

    const user = new User({
      username: username,
      password: hashedpassword,
    });

    const insertedUser = await user.save();
    response.status(201).json(insertedUser);
  } catch (error) {
    response.status(400).json({ error });
  }
});

userRouter.post("/login", async (request: Request, response: Response) => {
  try {
    const { username, password } = request.body;

    if (!username) {
      response.status(400).json({
        error: "username missing",
      });
    }
    const user = await User.findOne({ username });

    const match = await argon2.verify(user.password, password);

    if (!match) {
      throw new Error("Unauthorized");
    }

    response.status(200).json("Valid login");
  } catch (error) {
    console.log(error);
    response.status(400).json({ error });
  }
});

export default userRouter;
