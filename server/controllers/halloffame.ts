import express, { Request, Response } from "express";
import OrderItem from "../models/OrderItem";
import Icecream, { Icecreams } from "../models/Icecream";

const hofRouter = express.Router();
hofRouter.use(express.json());

hofRouter.get("/", async (request: Request, response: Response) => {
    const allFlavors =[]

    // Get the total number of times each iceCreamId has been sold
    const result = await OrderItem.aggregate([
        {
          $group: {
            _id: "$iceCreamId",
            sum: {
              $sum: {
                "$toInt": "$quantity"
              }}}}
      ])

    // Create an array of Flavor Names, total times sold, and user generated boolean
    for (const orderSum of result) {
        const icecream = await Icecream.findById(orderSum['_id']);
        allFlavors.push({'name': icecream['name'], quantity: orderSum['sum'], isUserGenerated: icecream['isUserGenerated']})
      }

    // Sort the array, and return only the 100 most commonly sold flavors
    const HoF = allFlavors.sort( 
        function(a, b) {
           return b['quantity'] - a['quantity'];
        }
      ).slice(0,100)
    response.status(200).json(HoF);
  })


  hofRouter.get("/name/:name", async (request: Request, response: Response) => {
    const allFlavors =[]
    const icecreamName = request.params.name;

    // Get the total number of times each iceCreamId has been sold
    const result = await OrderItem.aggregate([
        {
          $group: {
            _id: "$iceCreamId",
            sum: {
              $sum: {
                "$toInt": "$quantity"
              }}}}
      ])

    // Create an array of Flavor Names, total times sold, and user generated boolean
    for (const orderSum of result) {
        const icecream = await Icecream.findById(orderSum['_id']);
        allFlavors.push({'name': icecream['name'], quantity: orderSum['sum'], isUserGenerated: icecream['isUserGenerated']})
      }

    var iceCream = allFlavors.find(x =>x.name == icecreamName);
    response.status(200).json(iceCream);
  })


export default hofRouter;