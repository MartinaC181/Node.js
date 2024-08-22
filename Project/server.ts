import express from "express";
import dbConnect from "./db/dbConnect";
import dotenv from "dotenv";
import router from "./routes";
import userRouter from "./api/user/routes";
import User from "./api/user/model";
import { userService } from "./api/user/service";





dotenv.config(); 

const PORT = parseInt(process.env.PORT ?? "3000", 10);
const HOST = process.env.HOST ?? "localhost";

const app = express();

app.use(express.json());

app.use("/api", router);

dbConnect();

app.use("/user", userRouter);

app.get("/Users", (req, res) => {
  const users = userService.getUsers();
  res.send(users);
});








app.listen(PORT, HOST, () => {
  console.log(`Server is running on http://${HOST}:${PORT}`);
});