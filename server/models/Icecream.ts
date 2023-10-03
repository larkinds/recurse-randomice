import mongoose from 'mongoose'
import uniqueValidator from 'mongoose-unique-validator'

export interface Icecreams extends mongoose.Document {
  name: string
  isUserGenerated: boolean
  userId: string
  dateCreated: Date
}

const IcecreamSchema = new mongoose.Schema<Icecreams>({
  name: {
    type: String,
    required: true,
    unique: true,
  },
  isUserGenerated: {
    type: Boolean,
    required: true,
  },
  userId: {
    type: String || mongoose.Schema.Types.ObjectId,
    ref: 'User',
  },
  dateCreated: {
    type: Date,
    required: true
  }
})

IcecreamSchema.plugin(uniqueValidator)

export default mongoose.models.Icecream || mongoose.model<Icecreams>('Icecream', IcecreamSchema)
