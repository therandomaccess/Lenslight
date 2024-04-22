import express from "express";
import * as PageController from "../controller/PageController.js"; 

const router = express.Router(); 

router.get("/", PageController.getİndexPage); 

router.get("/about", PageController.getAboutPage);

router.get("/register", PageController.getRegisterPage);

export default router;
