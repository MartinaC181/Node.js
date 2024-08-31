type filterByPrice = "lower" | "higher";
  
  export interface IProduct {
    _id?: string;
    name: string;
    description: string;
    price: number;
    stock: number;
    image: string;
    categoryId: string;
    salersId?: string;
    filterByPrice: string;
    priceRange: string;
    page: string;
    limit: string;
  }

