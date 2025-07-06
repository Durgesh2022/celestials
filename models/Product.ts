import mongoose from 'mongoose';

const ProductSchema = new mongoose.Schema(
  {
    name: String,
    description: String,
    deliveryInfo: String,
    onSale: String,
    priceDrop: Number,
    imageUrls: [String],
  },
  { timestamps: true }
);

export default mongoose.models.Product ||
  mongoose.model('Product', ProductSchema);
