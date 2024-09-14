import { ICart } from './types';
import { cartDao } from './dao';

const { getAllcarts, getCartById, createCart, updateCart, deleteCart } = cartDao;

class CartService {
    async getAllcarts() {
        try {
            const carts = await getAllcarts();
            return carts;
        } catch (error) {
            throw Error((error as Error).message);
        }
    }
    async getCartById(cartId: string) {
        try {
            const cart = await getCartById(cartId);
            return cart;
        } catch (error) {
            throw Error((error as Error).message);
        }
    }
    async createCart(cart: ICart) {
        const { userId, products, totalPrice } = cart;
        try {
            const newCart = await createCart(cart);
            return newCart;
        } catch (error) {
            throw Error((error as Error).message);
        }
    }
    async updateCart(cartId: string, cart: { userId: string; products: any; totalPrice: number }) {
        try {
            const updatedCart = await updateCart(cartId, cart);
            return updatedCart;
        } catch (error) {
            throw Error((error as Error).message);
        }
    }
    async deleteCart(cartId: string) {
        try {
            const deletedCart = await deleteCart(cartId);
            return deletedCart;
        } catch (error) {
            throw Error((error as Error).message);
        }
    }
}
export const cartService = new CartService();