import mongoose from "mongoose";
import uniqueValidator from "mongoose-unique-validator";

export interface Orders extends mongoose.Document {
  userID: string;
  date: Date;
  total: number;
  orderItems: string;
}

const OrdersSchema = new mongoose.Schema<Orders>({
  userID: {
    type: String || mongoose.Schema.Types.ObjectId,
    required: true,
    unique: true,
    ref: "User",
  },
  date: {
    type: Date,
    required: true,
  },
  total: {
    type: Number,
    required: true,
  },
  orderItems: [
    {
      type: String || mongoose.Schema.Types.ObjectId,
      ref: "OrderItem",
    },
  ],
});

OrdersSchema.plugin(uniqueValidator);

export default mongoose.models.Orders ||
  mongoose.model<Orders>("Orders", OrdersSchema);
