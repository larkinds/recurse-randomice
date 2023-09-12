import mongoose from 'mongoose'
import uniqueValidator from 'mongoose-unique-validator'

export interface Toppings extends mongoose.Document {
  name: string
}

const ToppingsSchema = new mongoose.Schema<Toppings>({
  name: {
    type: String,
    required: true,
    unique: true,
  },
})

ToppingsSchema.plugin(uniqueValidator)

export default mongoose.models.Topping || mongoose.model<Toppings>('Topping', ToppingsSchema)
