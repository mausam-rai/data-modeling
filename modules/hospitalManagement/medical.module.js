import mongoose from 'mongoose';
const mediaclSchema = new mongoose.Schema({
  name:{
    type:String,
    required:true
  },
  addressLine1:{
    type:String,
    required:true
  },
  addressline2:{
    type:String
  },
  postalCode:{
    type:String,
    required:true
  }
}, { timestamps: true });
export const Medical = mongoose.model('Medical', mediaclSchema);
