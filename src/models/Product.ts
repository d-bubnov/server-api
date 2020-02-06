import mongoose, { Schema } from 'mongoose';

// Define collection and schema for Product
const Product = new Schema(
  {
    ProductName: {
      type: String,
    },
    ProductDescription: {
      type: String,
    },
    ProductPrice: {
      type: Number,
    },
  },
  {
    collection: 'Product',
  },
);

export default mongoose.model('Product', Product);
