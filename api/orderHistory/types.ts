
export interface IProductsOH{
    productId: string;
    name: string;
    quantity: number;
    price: number;
}

export interface IOrderHistory {
    _id?: string;
    userId: string;
    products: IProductsOH[];
    totalPrice: number;
    orderDate?: String;
}