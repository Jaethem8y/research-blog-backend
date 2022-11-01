import express from "express";
import cors from "cors";
import dotenv from "dotenv";

dotenv.config();

import { adminRouter } from "./src/controller/admin-controller";
import { postRouter } from "./src/controller/admin-post-controller";
import { apiPostRouter } from "./src/controller/api-post-controller";

const app = express();
const port = 8080;

app.use(cors());
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.use("/login", adminRouter);
app.use("/admin", postRouter);
app.use("/api", apiPostRouter);

app.listen(port, () => {
  console.log(`server started at http://localhost:${port}`);
});
