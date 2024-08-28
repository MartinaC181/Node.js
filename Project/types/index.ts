
export interface ICart {
  products: { _id: string; quantity: number }[];
  totalPrice: number;
}
