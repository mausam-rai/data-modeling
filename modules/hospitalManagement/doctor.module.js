import mongoose from 'mongoose';
const workingHours = new mongoose.Schema({
  hospitalHours: {
    type: Number,
    default: 0,
  },
});
const doctorSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    qualification: {
      type: String,
      required: true,
    },
    salery: {
      type: String,
      required: true,
    },
    address: {
      type: String,
      required: true,
    },
    specialist: {
      type: String,
      required: true,
    },
    experience: {
      type: Number,
      default: 0,
      required: true,
    },
    workingHours: {
      type: [workingHours],
    },
  },
  { timestamps: true }
);
export const Doctor = mongoose.model('Doctor', doctorSchema);
