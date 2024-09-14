import express from "express";
import dbConnect from "./db/dbConnect";
import dotenv from "dotenv";
import router from "./routes";
import userRouter from "./api/user/routes";
import productRouter from "./api/product/routes";
import categoryRouter from "./api/category/routes";
import OHrouter from "./api/orderHistory/routes"; 
import cartRouter from "./api/cart/routes";

dotenv.config(); 

const PORT = parseInt(process.env.PORT ?? "3000", 10);
const HOST = process.env.HOST ?? "localhost";

const app = express();

app.use(express.json());

app.use("/api", router);

dbConnect();

//Usuarios de la app 
app.use("/user", userRouter);

//Productos de la app
app.use("/product", productRouter);

//Categorias 
app.use("/category", categoryRouter);

//Historial de compras
app.use("/orderHistory", OHrouter);

//Carrito de compras
app.use("/cart", cartRouter);




app.listen(PORT, HOST, () => {
  console.log(`Server is running on http://${HOST}:${PORT}`);
});