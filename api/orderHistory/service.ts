import { IOrderHistory } from "./types";
import { orderHistoryDao } from "./dao";

const { getOH, getAllOH, createOH, editOH, deleteOH } = orderHistoryDao;

class OrderHistoryService { 
    async getOH(id: string) {
        try {
            const orderHistory = await getOH(id);
            return orderHistory;
        } catch (error) {
            throw Error((error as Error).message);
        }
    }
    async getAllOH(searchParams: IOrderHistory) {
        try {
            const orderHistories = await getAllOH(searchParams);
            return orderHistories;
        } catch (error) {
            throw Error((error as Error).message);
        }
    }
    async createOH(orderHistory: IOrderHistory) {
        try {
            const newOH = await createOH(orderHistory);
            return newOH;
        } catch (error) {
            throw Error((error as Error).message);
        }
    }
    async editOH(id: string, orderHistory: IOrderHistory) {
        try {
            const editedOH = await editOH(id, orderHistory);
            return editedOH;
        } catch (error) {
            throw Error((error as Error).message);
        }
    }
    async deleteOH(id: string) {
        try {
            const deletedOH = await deleteOH(id);
            return deletedOH;
        } catch (error) {
            throw Error((error as Error).message);
        }
    }
};

export const orderHistoryService = new OrderHistoryService();