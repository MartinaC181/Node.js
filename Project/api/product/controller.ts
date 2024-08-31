import { Request, Response } from "express";
import { productService } from "./service";
import { IProduct } from "./types";
import mongoose from "mongoose";
import { categoryService } from "../category/service";

const { getProduct, getProducts, createProductService, deleteProduct, editProduct } =
  productService;

class ProductController {
  async getProduct(req: Request, res: Response) {
    const { id } = req.params;
    try {
      const product = await getProduct(id);
      return res.status(200).json(product);
    } catch (error) {
      return res.status(400).json({ error });
    }
  }
  async getProducts(req: Request, res: Response) {
    const searchParams: IProduct = req.query as unknown as IProduct;
  
    try {
      const products = await getProducts(searchParams);
      return res.status(200).json(products);

    } catch (error) {
      return res.status(400).json({ error });
    }
  }
  async createProduct(req: Request, res: Response) {
    const { name, description, category , stock, price, image } = req.body;

    if (!mongoose.Types.ObjectId.isValid(category)) {
      return res.status(400).json({ error: "Invalid category ID" });
    }
    
    const product: IProduct = { 
      name, 
      description, 
      categoryId: category,
      stock, 
      price, 
      image,
      filterByPrice: "",
      priceRange: "",
      page: "",
      limit: ""
     };
    try {
      const cat = await categoryService.getCategory(category);
      if (!cat) {
        return res.status(404).json({ error: "Category not found" });
      } 

      const newProduct = await createProductService(product);
      return res.status(200).json(newProduct);
    } catch (error) {
      return res.status(500).json({ error });
    }
  }
  async deleteProduct(req: Request, res: Response) {
    const { id } = req.params;
    try {
      const deletedProduct = await deleteProduct(id);
      return res.status(200).json(deletedProduct);
    } catch (error) {
      return res.status(400).json({ error });
    }
  }
  async editProduct(req: Request, res: Response) {
    const { id } = req.params;
    const editedProductBody = req.body;
    try {
      const editedProduct = await editProduct(id, editedProductBody);
      return res.status(200).json(editedProduct);
    } catch (error) {
      return res.status(400).json({ error });
    }
  }
}

export const productController = new ProductController();
