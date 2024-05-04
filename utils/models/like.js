// mongoose
const { Schema, models, model } = require("mongoose");

const likeSchema = new Schema({
  type: { type: String, required: true, default: "product" },
  user: { type: Schema.Types.ObjectId, ref: "User", required: true },
  product: { type: Schema.Types.ObjectId, ref: "Product" },
  blog: { type: Schema.Types.ObjectId, ref: "Blog" },
});

export const Like = models?.Like || model("Like", likeSchema);
