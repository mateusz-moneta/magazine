import * as mongoose from 'mongoose';

export const ProductSchema = new mongoose.Schema({
  name: String,
  price: String,
  updateDate: Number
}, {
  toJSON: {
    transform: (doc, ret) => {
      const id = ret['_id'];
      delete ret['_id'];
      delete ret['__v'];

      return {
        ...ret,
        id
      }
    }
  }
});

ProductSchema.pre('save', function(next) {
  this.updateDate = Date.now();
  next();
});