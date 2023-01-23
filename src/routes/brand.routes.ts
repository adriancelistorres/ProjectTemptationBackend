import { Router } from "express";
import brandController from "../controllers/brand.controller";

const brandcontroller = new brandController;

const router =  Router();

router.post("/brand",brandcontroller.addBrnad);

export default router;