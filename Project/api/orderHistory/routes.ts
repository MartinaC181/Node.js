import express from "express";
import { ohController } from "./controller";

const { getOH, getAllOH, createOH, editOH, deleteOH } = ohController;
const OHrouter = express.Router();

OHrouter.get("/", getAllOH);
OHrouter.get("/:id", getOH);
OHrouter.post("/addOH", createOH);
OHrouter.put("/editOH/:id", editOH);
OHrouter.delete("/deleteOH/:id", deleteOH);

export default OHrouter;

