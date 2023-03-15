import { Router } from "express";
import brandController from "../controllers/brand.controller";
import ValidateToken from "../controllers/validate-token.controller";

const brandcontroller = new brandController;
const validatetoken =  new ValidateToken;


const router =  Router();

router.post("/brand",validatetoken.Token,brandcontroller.addBrand);
router.get("/brands",validatetoken.Token,brandcontroller.getBrand);
router.get("/brand/:idbrand",validatetoken.Token,brandcontroller.getOneBrand);
router.put("/brand/:idbrand",validatetoken.Token,brandcontroller.UpdateBrand);
router.delete("/brand/:idbrand",validatetoken.Token,brandcontroller.deleteBrand);

/*Para el cliente */
router.get("/brands2",brandcontroller.getBrand);
router.get("/brand2/:idbrand",brandcontroller.getOneBrand);
export default router;