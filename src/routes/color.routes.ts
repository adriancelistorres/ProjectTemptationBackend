//IMPORTAR LIBRERIA 'express' PARA UTILIZAR EL 'Router'
import {Router} from "express"
import ColorController from "../controllers/color.controller"

const colorcontroller = new ColorController();

const router = Router();

router.post("/color",colorcontroller.addColor);
router.get("/colors",colorcontroller.getColor);
router.get("/color/:idcolor",colorcontroller.getOneColor);
router.put("/color/:idcolor",colorcontroller.updateColor);
router.delete("/color/:idcolor",colorcontroller.deleteColor);

export default router;