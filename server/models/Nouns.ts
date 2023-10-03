import mongoose from 'mongoose'
import uniqueValidator from 'mongoose-unique-validator'

export interface Noun extends mongoose.Document {
  name: string
  count: number
}

const NounSchema = new mongoose.Schema<Noun>({
  name: {
    type: String,
    required: true,
    unique: true,
  },
  count: {
    type: Number
  }
})

NounSchema.plugin(uniqueValidator)

export default mongoose.models.Noun || mongoose.model<Noun>('Noun', NounSchema)
