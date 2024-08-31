import { Request, Response } from "express";
import { orderHistoryService } from "./service";
import { IOrderHistory } from "./types";


const { getOH, getAllOH, createOH, editOH, deleteOH } = orderHistoryService;

class OHController {
    async getOH(req: Request, res: Response) {
        const { id } = req.params;
        try {
            const orderHistory = await getOH(id);
            return res.status(200).json(orderHistory);
        } catch (error) {
            return res.status(400).json({ error });
        }
    }
    async getAllOH(req: Request, res: Response) {
        const searchParams: IOrderHistory = req.query as unknown as IOrderHistory;
    
        try {
            const orderHistories = await getAllOH(searchParams);
            return res.status(200).json(orderHistories);

        } catch (error) {
            return res.status(400).json({ error });
        }
    }
    async createOH(req: Request, res: Response) {
        const { totalPrice, userId, products,  } = req.body;
        const orderHistory: IOrderHistory = { totalPrice, userId, products };
        try {
            const newOH = await createOH(orderHistory);
            return res.status(200).json(newOH);
        } catch (error) {
            return res.status(500).json({ error });
        }
    }
    async editOH(req: Request, res: Response) {
        const { id } = req.params;
        const orderHistory: IOrderHistory = req.body;
        
        try {
            const editedOH = await editOH(id, orderHistory);
            return res.status(200).json(editedOH);
        } catch (error) {
            return res.status(500).json({ error });
        }
    }
    async deleteOH(req: Request, res: Response) {
        const { id } = req.params;
        try {
            const deletedOH = await deleteOH(id);
            return res.status(200).json(deletedOH);
        } catch (error) {
            return res.status(500).json({ error });
        }
    }
}
export const ohController = new OHController();

