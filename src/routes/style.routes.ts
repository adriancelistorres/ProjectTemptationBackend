import { Router } from "express";
import StylesController from "../controllers/style.controller";

const stylescontroller = new StylesController;

const router = Router();

router.post("/style",stylescontroller.addStyles);
router.get("/styles",stylescontroller.getStyles);
router.get("/style/:idstyles",stylescontroller.getOneStyle);
router.put("/style/:idstyles",stylescontroller.updateStyle);
router.delete("/style/:idstyles",stylescontroller.deleteStyle);

export default router