const { Schema, models, model } = require("mongoose");

const blogSchema = new Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  image: { type: String, required: true },
  slug: { type: String, required: true, unique: true },
  keywords: { type: [String], default: [] },
  likes: [{ type: Schema.Types.ObjectId, ref: "User", default: [] }],
  createdAt: {
    type: Date,
    default: () => Date.now(),
    immutabale: true,
  },
});

export const Blogs = models?.Blog || model("Blog", blogSchema);
