// mongoos
import { Schema, models, model } from "mongoose";

const productSchema = new Schema({
  title: { type: String, required: true },
  description: { type: String },
  image: { type: String, required: true },
  price: { type: Number, required: true },
  stock: { type: Number, required: true },
  discount: { type: Number, default: 0 },
  category: { type: String, required: true },
  keywords: { type: [String], default: [] },
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
  published: { type: Boolean, default: false },
  createdAt: {
    type: Date,
    default: () => Date.now(),
    immutabale: true,
  },
  createdBy: { type: Schema.Types.ObjectId, ref: "Admin" },
});

export const Products = models?.Product || model("Product", productSchema);
