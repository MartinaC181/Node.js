type filterByPrice = "lower" | "higher";
  
  export interface IProduct {
    _id: string | undefined;
    name: string;
    description: string;
    price: number;
    stock: number;
    image: string;
    category: string;
    salersId: string;
    filterByPrice: string;
    priceRange: string;
    page: string;
    limit: string;
  }

