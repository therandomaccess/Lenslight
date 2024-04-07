import express from "express";
import dotenv from "dotenv";
import conn from "./db.js";
import PageRouter from "./routers/PageRouter.js"
import PhotoRouter from "./routers/PhotoRouter.js";

dotenv.config();

conn();

const app = express();
app.use(express.static("public"));
app.use(express.json());
app.set("view engine", "ejs");

app.use("/", PageRouter);
app.use("/photos", PhotoRouter);

app.listen(process.env.PORT, () => {
  console.log("listening on port " + process.env.PORT);
});
