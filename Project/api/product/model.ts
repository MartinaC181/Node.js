import { Schema, model } from "mongoose";

const productSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  stock: {
    type: Number,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  categoryId: {
    type: Schema.Types.ObjectId,
    ref: "Category",
    required: true,
  },
  image: {
    type: String,
    default: "",
  },
  salersId: {
    type: Schema.Types.ObjectId,
    ref: "User",
    required: false,
  },
  filterByPrice: {
    type: String,
    default: "",
  },
  priceRange: {
    type: String,
    default: "",
  },
});

const Product = model("Product", productSchema);

export default Product;