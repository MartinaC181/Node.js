import express from "express";
import dbConnect from "./db/dbConnect";
import dotenv from "dotenv";
import router from "./routes";
import userRouter from "./api/user/routes";
import productRouter from "./api/product/routes";
import categoryRouter from "./api/category/routes";

dotenv.config(); 

const PORT = parseInt(process.env.PORT ?? "3000", 10);
const HOST = process.env.HOST ?? "localhost";

const app = express();

app.use(express.json());

app.use("/api", router);

dbConnect();

app.use("/user", userRouter);

app.use("/product", productRouter);

app.use("/category", categoryRouter);



app.listen(PORT, HOST, () => {
  console.log(`Server is running on http://${HOST}:${PORT}`);
});