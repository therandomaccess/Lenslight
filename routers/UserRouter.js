import express from "express";
import * as UserController from "../controller/UserController.js";

const router = express.Router();

router.post("/register",UserController.CreateUser);

export default router;
