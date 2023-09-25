import mongoose from "mongoose";
import uniqueValidator from "mongoose-unique-validator";

export interface Topping extends mongoose.Document {
  name: string;
  imgUrl: string;
}

const ToppingsSchema = new mongoose.Schema<Topping>({
  name: {
    type: String,
    required: true,
    unique: true,
  },
  imgUrl: {
    type: String,
  },
});

ToppingsSchema.plugin(uniqueValidator);

export default mongoose.models.Topping || mongoose.model<Topping>("Topping", ToppingsSchema);
