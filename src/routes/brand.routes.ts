import { Router } from "express";
import brandController from "../controllers/brand.controller";
import ValidateToken from "../controllers/validate-token.controller";

const brandcontroller = new brandController;
const validatetoken =  new ValidateToken;


const router =  Router();

router.post("/brand",validatetoken.Token,brandcontroller.addBrand);
router.get("/brands",validatetoken.Token,brandcontroller.getBrand);
router.get("/brand/:idbrand",validatetoken.Token,brandcontroller.getOneCategory);
router.put("/brand/:idbrand",validatetoken.Token,brandcontroller.UpdateBrand);
router.delete("/brand/:idbrand",validatetoken.Token,brandcontroller.deleteBrand);

export default router;