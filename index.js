import express from "express";
import cors from "cors";
import { usersRouter } from "./router/users.router";

import { recordRouter } from "./router/record.router";
import { categoryRouter } from "./router/category.router";

const app = express();

app.use(express.json());
app.use(cors());

const port = 8000;

app.use("/users", usersRouter);
app.use("/category", categoryRouter);
app.use("/records", recordRouter);

app.listen(port, () => {
  console.log(`server started http://localhost:${port}`);
});
