import { Router } from "express";
import SizeController from "../controllers/size.controller"
import ValidateToken from "../controllers/validate-token.controller";

const sizecontroller = new SizeController;
const validatetoken =  new ValidateToken;



const router = Router();

router.post("/size",validatetoken.Token,sizecontroller.addSize);
router.get("/sizes",validatetoken.Token,sizecontroller.getSize);
router.get("/size/:idsize",validatetoken.Token,sizecontroller.getOneSize);
router.put("/size/:idsize",validatetoken.Token,sizecontroller.UpdateSize);
router.delete("/size/:idsize",validatetoken.Token,sizecontroller.deleteSize);

//RUTAS PARA EL CLIENTE
router.get("/sizes2",sizecontroller.getSize);
router.get("/size2/:idsize",sizecontroller.getOneSize);
export default router;