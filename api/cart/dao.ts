import Icart from "./model";
import { ICart } from "./types";

const cart  = {
    async getAllcarts(){
        try {
        const carts = await Icart.find();
        return carts;
        } catch (error) {
        throw Error((error as Error).message);
        }
    },
    async getCartById(cartId: string) {
        try {
        const cart = await Icart.findById(cartId);
        return cart;
        
        } catch (error) {
        throw Error((error as Error).message);
        }
    },
    async createCart(cart: ICart) {
        const { userId, products, totalPrice } = cart;
        try {
        const newCart = await Icart.create(cart);
        return newCart;
        } catch (error) {
        throw Error((error as Error).message);
        }
    },
    async updateCart(
        cartId: string,
        cart: { userId: string; products: any; totalPrice: number }
    ) {
        try {
        const updatedCart = await Icart.findByIdAndUpdate(
            cartId,
            cart,
            { new: true }
        );
        return updatedCart;
        } catch (error) {
        throw Error((error as Error).message);
        }
    },
    async deleteCart(cartId: string) {
        try {
        const deletedCart = await Icart.findByIdAndDelete(cartId);
        return deletedCart;
        } catch (error) {
        throw Error((error as Error).message);
        }
    },
};
export const cartDao = cart;