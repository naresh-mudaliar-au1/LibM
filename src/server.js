import express from "express";
import { json } from "body-parser";
import "dotenv/config";
import cors from "cors";

import "./config/db";
import { userRoute } from "./user";
import { bookRoute } from "./books";

const app = express();

const PORT = process.env.PORT || 8080;
const HOST = process.env.HOST || "localhost";

app.use(json());

app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Methods", "GET, PUT, POST, DELETE, OPTIONS");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});

app.use(cors());
app.use("/api/v1/user",userRoute);
app.use("/api/v1/book",bookRoute);

app.listen(PORT, () => {
  console.log(`Server Running at http://${HOST}:${PORT}/`);
});
