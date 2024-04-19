const { Schema, models, model } = require("mongoose");

const commentSchema = new Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  answer: { type: String, default: "" },
  status: { type: String, default: "Not-Answered" },
  productId: { type: Schema.Types.ObjectId, ref: "StoreDashboardProduct" },
  senderId: { type: Schema.Types.ObjectId, ref: "StoreShopUser" },
  published: { type: Boolean, default: false },
  createdAt: {
    type: Date,
    default: () => Date.now(),
    immutabale: true,
  },
});

export const Comments =
  models?.StoreShopComment || model("StoreShopComment", commentSchema);
