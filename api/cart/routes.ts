import express from "express";
import { cartController } from "./controller";

const { getAllcarts, getCartById, createCart, deleteCart, updateCart } = cartController;

const cartRouter = express.Router()

cartRouter.get("/carts", getAllcarts);

cartRouter.get("/:id", getCartById);

cartRouter.post("/addCart", createCart);
    
cartRouter.put("/updateCart/:id", updateCart);

cartRouter.delete("/deleteCart/:id", deleteCart);

export default cartRouter;