import { Router } from "express";
import InputController from "../controllers/input.controller";
import ValidateToken from "../controllers/validate-token.controller";

const inputcontroller = new InputController;
const validatetoken = new ValidateToken;

const router = Router();

router.post("/input",inputcontroller.addInput);
router.get("/inputs",inputcontroller.getInput);
router.get("/input/:idinput",inputcontroller.getOneInput);
router.put("/input/:idinput",inputcontroller.updateInput);
/*
router.post("/input",validatetoken.Token,inputcontroller.addInput);
router.get("/inputs",validatetoken.Token,inputcontroller.getInput);
router.get("/input/:idinput",validatetoken.Token,inputcontroller.getOneInput);
router.put("/input/:idinput",validatetoken.Token,inputcontroller.updateInput);
router.delete("/style/:idstyles",validatetoken.Token,inputcontroller.deleteStyle);*/

export default router