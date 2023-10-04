import mongoose from 'mongoose'
import uniqueValidator from 'mongoose-unique-validator'

export interface Adjective extends mongoose.Document {
  name: string
  count: number
}

const AdjectiveSchema = new mongoose.Schema<Adjective>({
  name: {
    type: String,
    required: true,
    unique: true,
  },
  count: {
    type: Number
  }
})

AdjectiveSchema.plugin(uniqueValidator)

export default mongoose.models.Adjective || mongoose.model<Adjective>('Adjective', AdjectiveSchema)
