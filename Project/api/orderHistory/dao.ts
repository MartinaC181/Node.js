import OrderHistory from "./model";
import { IOrderHistory } from "./types";

class OHdao {
    async getOH(id: string) {
        try {
            const orderHistory = await OrderHistory.findById(id);
            return orderHistory;
        } catch (error) {
            throw Error((error as Error).message);
        }
    }
    async getAllOH(searchParams: IOrderHistory) {
        try {
            const orderHistories = await OrderHistory.find(searchParams);
            return orderHistories;
        } catch (error) {
            throw Error((error as Error).message);
        }
    }
    async createOH(orderHistory: IOrderHistory) {
        try {
            const newOH = await OrderHistory.create(orderHistory);
            return newOH;
        } catch (error) {
            throw Error((error as Error).message);
        }
    }
    async editOH(id: string, orderHistory: IOrderHistory) {
        try {
            const editedOH = await OrderHistory.findByIdAndUpdate(id, orderHistory, { new: true });
            return editedOH;
        } catch (error) {
            throw Error((error as Error).message);
        }
    }
    async deleteOH(id: string) {
        try {
            const deletedOH = await OrderHistory.findByIdAndDelete(id);
            return deletedOH;
        } catch (error) {
            throw Error((error as Error).message);
        }
    }
}

export const orderHistoryDao = new OHdao();