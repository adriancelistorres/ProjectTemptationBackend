import { Router } from "express";
import brandController from "../controllers/brand.controller";

const brandcontroller = new brandController;

const router =  Router();

router.post("/brand",brandcontroller.addBrand);
router.get("/brands",brandcontroller.getBrand);
router.get("/brand/:idbrand",brandcontroller.getOneCategory);
router.put("/brand/:idbrand",brandcontroller.UpdateBrand);
router.delete("/brand/:idbrand",brandcontroller.deleteBrand);

export default router;