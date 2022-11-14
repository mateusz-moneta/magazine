import * as mongoose from 'mongoose';

export const ProductSchema = new mongoose.Schema({
  id: String,
  name: String,
  price: String,
  updateDate: Number
});

ProductSchema.pre('save', function(next) {
  this.updateDate = Date.now();
  next();
});