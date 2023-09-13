import mongoose from 'mongoose'
import uniqueValidator from 'mongoose-unique-validator'

export interface OrderItems extends mongoose.Document {
  quantity: number
  orderId: string
  iceCreamId: string
}

const OrderItemSchema = new mongoose.Schema<OrderItems>({
  quantity: {
    type: Number,
    required: true,
  },
  orderId: {
    type: String || mongoose.Schema.Types.ObjectId,
    required: true,
    ref: 'Orders',
  },
  iceCreamId: {
    type: String || mongoose.Schema.Types.ObjectId,
    ref: 'Icecream',
  },
})

OrderItemSchema.plugin(uniqueValidator)

export default mongoose.models.OrderItem ||
  mongoose.model<OrderItems>('OrderItem', OrderItemSchema)
