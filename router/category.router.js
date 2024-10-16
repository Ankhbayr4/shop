import express from "express";
import { getCategory } from "../controller/catigory/get-catigory";
import { addCategory } from "../controller/catigory/add-category";

export const categoryRouter = express.Router();

categoryRouter.get("/", getCategory);

categoryRouter.post("/", addCategory);
