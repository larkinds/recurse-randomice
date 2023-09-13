import mongoose from 'mongoose'
import uniqueValidator from 'mongoose-unique-validator'

export interface Users extends mongoose.Document {
  username: string
  password: string
  iceCreamId: string
}

const UserSchema = new mongoose.Schema<Users>({
  username: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  iceCreamId: [{
    type: String || mongoose.Schema.Types.ObjectId,
    ref: 'Icecream',
  }],
})

UserSchema.plugin(uniqueValidator)

export default mongoose.models.User ||
  mongoose.model<Users>('User', UserSchema)
