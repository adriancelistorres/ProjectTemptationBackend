import { Router } from "express";
import StylesController from "../controllers/style.controller";
import ValidateToken from "../controllers/validate-token.controller";

const stylescontroller = new StylesController;
const validatetoken =  new ValidateToken;


const router = Router();

router.post("/style",validatetoken.Token,stylescontroller.addStyles);
router.get("/styles",validatetoken.Token,stylescontroller.getStyles);
router.get("/style/:idstyles",validatetoken.Token,stylescontroller.getOneStyle);
router.put("/style/:idstyles",validatetoken.Token,stylescontroller.updateStyle);
router.delete("/style/:idstyles",validatetoken.Token,stylescontroller.deleteStyle);

export default router