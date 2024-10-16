import express from "express";
import { getRecord } from "../controller/record/get-record";
import { addRecord } from "../controller/record/add-record";

export const recordRouter = express.Router();

recordRouter.get("/", getRecord);

recordRouter.post("/", addRecord);
