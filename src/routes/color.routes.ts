//IMPORTAR LIBRERIA 'express' PARA UTILIZAR EL 'Router'
import {Router} from "express"
import ColorController from "../controllers/color.controller"
import ValidateToken from "../controllers/validate-token.controller";
const validatetoken =  new ValidateToken;

const colorcontroller = new ColorController();

const router = Router();

router.post("/color",validatetoken.Token,colorcontroller.addColor);
router.get("/colors",validatetoken.Token,colorcontroller.getColor);
router.get("/color/:idcolor",validatetoken.Token,colorcontroller.getOneColor);
router.put("/color/:idcolor",validatetoken.Token,colorcontroller.updateColor);
router.delete("/color/:idcolor",validatetoken.Token,colorcontroller.deleteColor);

export default router;