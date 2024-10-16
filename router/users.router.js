import express from "express";

import { getUsers } from "../controller/users/get-users";
import { addUser } from "../controller/users/add-users";

export const usersRouter = express.Router();

usersRouter.get("/", getUsers);

usersRouter.post("/", addUser);
