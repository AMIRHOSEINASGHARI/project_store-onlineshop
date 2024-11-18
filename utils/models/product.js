// mongoos
import { Schema, models, model } from "mongoose";

const productSchema = new Schema({
  title: { type: String, required: true },
  subDescription: { type: String, required: true },
  content: { type: String, required: true },
  images: { type: [String], required: true },
  price: { type: Number, required: true },
  stock: { type: Number, required: true },
  discount: { type: Number, required: true, default: 0 },
  category: { type: String, required: true },
  keywords: { type: [String], required: true },
  orders: [
    {
      orderId: {
        type: Schema.Types.ObjectId,
        ref: "Order",
      },
      quantity: { type: Number },
    },
  ],
  brand: { type: String, required: true },
  likes: [{ type: Schema.Types.ObjectId, ref: "Like", default: [] }],
  comments: [{ type: Schema.Types.ObjectId, ref: "Comment", default: [] }],
  published: { type: Boolean, default: false, required: true },
  createdBy: { type: Schema.Types.ObjectId, ref: "Admin", required: true },
  createdAt: {
    type: Date,
    default: () => Date.now(),
    immutabale: true,
  },
});

export const Products = models?.Product || model("Product", productSchema);
