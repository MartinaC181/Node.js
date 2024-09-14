import { model, Schema } from "mongoose";
import { ICart } from "./types";

const cartSchema = new Schema({
    userId: {
        type: Schema.Types.ObjectId,
        ref: "User",
        required: true,
    },
    products: [
        {
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
        },
    ],
    totalPrice: {
        type: Number,
        required: true,
    },
});
const Icart = model("Cart", cartSchema);
export default Icart;