//IMPORTAR LIBRERIA 'express' PARA UTILIZAR EL 'Router'
import {Router} from "express"
import ColorController from "../controllers/color.controller"

const colorcontroller = new ColorController();

const router = Router();

router.post("/color",colorcontroller.addColor);

export default router;