import { Router } from "express";
import SizeController from "../controllers/size.controller"

const sizecontroller = new SizeController;

const router = Router();

router.post("/size", sizecontroller.addSize);

export default router;