import express from "express";
import * as PageController from "../controller/PageController.js"; 


const router = express.Router(); 

router.get("/", PageController.getİndexPage); 

router.get("/about", PageController.getAboutPage);

router.get("/register", PageController.getRegisterPage);

router.get("/login", PageController.getLoginPage);

router

export default router;
