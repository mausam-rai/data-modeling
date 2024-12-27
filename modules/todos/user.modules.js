import mongoose from 'mongoose';
const userSchema = new mongoose.Schema(
  {
    userName: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
    },
    email: {
      type: String,
      required: true,
    },
    password: {
      type: string,
      required: true,
      min: [6, 'must be greater than 6'],
    },
  },
  { timestamps: true }
);
export const User = mongoose.model('User', userSchema);
