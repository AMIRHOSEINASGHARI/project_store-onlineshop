const { Schema, models, model } = require("mongoose");

const productSchema = new Schema({
  title: { type: String, required: true },
  description: { type: String },
  image: { type: String, required: true },
  price: { type: Number, required: true },
  stock: { type: Number, required: true },
  discount: { type: Number, default: 0 },
  category: { type: String, required: true },
  colors: { type: [String], default: [] },
  keywords: { type: [String], default: [] },
  orders: [{ type: Schema.Types.ObjectId, ref: "Order", default: [] }],
  brand: { type: String, required: true },
  likes: [{ type: Schema.Types.ObjectId, ref: "Like", default: [] }],
  comments: [{ type: Schema.Types.ObjectId, ref: "Comment", default: [] }],
  createdAt: {
    type: Date,
    default: () => Date.now(),
    immutabale: true,
  },
});

export const Products = models?.Product || model("Product", productSchema);
