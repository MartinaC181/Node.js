export interface ICart {
    userId: string;
    products: [
        {
            productId: string;
            name: string;
            price: number;
            quantity: number;
            categoryId: string;
        },
    ];
    totalPrice: number;
    orderDate?: string;
}
  