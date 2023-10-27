import express, { Request, Response, NextFunction } from "express";
import { storage } from '../lib/firebase'
import { ref, uploadBytes, getDownloadURL } from 'firebase/storage'
import { HF_TOKEN } from "../utils/config";

const imageRouter = express.Router();
imageRouter.use(express.json());

imageRouter.post("/", async (req: Request, res: Response) => {
    try {
        const response = await fetch(
              "https://api-inference.huggingface.co/models/stabilityai/stable-diffusion-xl-base-1.0",
              {
                headers: {
                  Authorization: `Bearer ${HF_TOKEN}`,
                },
                method: "POST",
                body: JSON.stringify(req.body.prompt),
              },
            );
        const imageUpload = await response.arrayBuffer();
        const imageRef = ref(storage, `Images/${req.body.flavor}.jpeg`)
        await uploadBytes(imageRef, imageUpload)
        const url = await getDownloadURL(imageRef)
        res.status(201).json(url).send();

    } catch (error) {
      console.log(error);
      res.status(400).json({ error }).send("message");
    }
  });

export default imageRouter