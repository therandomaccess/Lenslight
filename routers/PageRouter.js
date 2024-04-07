import express from "express";
import * as PageController from "../controller/PageController.js"; 

const router = express.Router(); 

router.get("/", PageController.getİndexPage); 

router.get("/about", PageController.getAboutPage);

export default router;
