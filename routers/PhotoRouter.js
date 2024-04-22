import express from "express";
import * as PhotoController from "../controller/PhotoController.js";

const router = express.Router();

router.post("/", PhotoController.createPhoto);
router.get("/", PhotoController.getAllPhotos);
router.get("/:id", PhotoController.getPhotosById);

export default router;
