import mongoose from 'mongoose';
const patienceSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    age: {
      type: Number,
      required: true,
    },
    address: {
      type: String,
      required: true,
    },
    admitIn: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Hospital',
    },
    gender: {
      type: String,
      enum: ['M', 'F', 'O'],
      required: true,
    },
    diagnoseWith: {
      type: String,
      required: true,
    },
    bloodGroup: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);
export const Patience = mongoose.model('Patience', patienceSchema);
