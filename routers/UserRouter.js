import express from "express";
import * as UserController from "../controller/UserController.js";
import * as authMiddleware from "../middlewares/authMiddleware.js"

const router = express.Router();

router.post("/register", UserController.CreateUser);
router.post("/login", UserController.loginUser);

router.get("/dashboard",authMiddleware.authenticateToken,UserController.getDashboardPage);

export default router;
