import { Schema, model } from "mongoose";

const productsOHSchema = new Schema({
    productId: {
        type: Schema.Types.ObjectId,
        ref: "Product",
        required: true,
    },
    name: {
        type: String,
        required: true,
    },
    price: {
        type: Number,
        required: true,
    },
    quantity: {
        type: Number,
        required: true,
    },
    categoryId: {
        type: Schema.Types.ObjectId,
        ref: "Category",
        required: true,
    },
  
});

const orderHistorySchema = new Schema({
    userId: {
        type: Schema.Types.ObjectId,
        ref: "User",
        required: true,
    },
    products: [productsOHSchema],
    totalPrice: {
        type: Number,
        required: true,
    },
    orderDate: {
        type: String,
        required: true,
    },
});

const OrderHistory = model("OrderHistory", orderHistorySchema);
export default OrderHistory;