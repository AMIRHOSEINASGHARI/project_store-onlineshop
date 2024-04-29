const { Schema, models, model } = require("mongoose");

const revenueSchema = new Schema({
  totalRevenue: {
    type: Number,
    default: 0,
  },
  totalProductsSold: {
    type: Number,
    default: 0,
  },
  products: [
    {
      productId: { type: Schema.Types.ObjectId, ref: "Product" },
      quantity: { type: Number },
    },
  ],
  totalOrders: [{ type: Schema.Types.ObjectId, ref: "Order", default: [] }],
});

export const Revenue = models?.Revenue || model("Revenue", revenueSchema);
