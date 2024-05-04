// mongoose
const { Schema, models, model } = require("mongoose");

const commentSchema = new Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  productId: { type: Schema.Types.ObjectId, ref: "Product", required: true },
  senderId: { type: Schema.Types.ObjectId, ref: "User", required: true },
  answer: { type: String, default: "" },
  status: { type: String, default: "Not-Answered" },
  published: { type: Boolean, default: false },
  createdAt: {
    type: Date,
    default: () => Date.now(),
    immutabale: true,
  },
});

export const Comments = models?.Comment || model("Comment", commentSchema);
