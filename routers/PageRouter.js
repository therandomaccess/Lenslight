import express from "express";
import * as PageController from "../controller/PageController.js"; 
import * as authMiddleware from "../middlewares/authMiddleware.js";

const router = express.Router(); 

router.get("/", authMiddleware.authenticateToken, PageController.getİndexPage); 

router.get("/about", PageController.getAboutPage);

router.get("/register", PageController.getRegisterPage);

router.get("/login", PageController.getLoginPage);

router

export default router;
