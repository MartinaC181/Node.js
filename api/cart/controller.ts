import { Response, Request } from "express";
import { cartService } from "./service";
import { ICart } from "./types";

const { getAllcarts, getCartById, createCart, deleteCart, updateCart} = cartService;

class CartController {
    async getAllcarts(req: Request, res: Response) {
        try {
            const carts = await getAllcarts();
            res.status(200).json(carts);
        } catch (error) {
            res.status(500).json({ message: (error as Error).message });
        }
    }
    async getCartById(req: Request, res: Response) {
        const { id } = req.params;
        try {
            const cart = await getCartById(id);
            res.status(200).json(cart);
        } catch (error) {
            res.status(500).json({ message: (error as Error).message });
        }
    }
    async createCart(req: Request, res: Response) {
        const cart = req.body;
        try {
            const newCart = await createCart(cart);
            res.status(200).json(newCart);
        } catch (error) {
            res.status(500).json({ message: (error as Error).message });
        }
    }
    async updateCart(req: Request, res: Response) {
        const { id } = req.params;
        const cart: ICart = req.body;
        try {
            const updatedCart = await updateCart//(id, cart);
            res.status(200).json(updatedCart);
        } catch (error) {
            res.status(500).json({ message: (error as Error).message });
        }
    }
    async deleteCart(req: Request, res: Response) {
        const { id } = req.params;
        try {
            const deletedCart = await deleteCart(id);
            res.status(200).json(deletedCart);
        } catch (error) {
            res.status(500).json({ message: (error as Error).message });
        }
    }
}
export const cartController = new CartController();