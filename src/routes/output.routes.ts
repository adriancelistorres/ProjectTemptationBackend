import { Router } from "express";
import OutputController from "../controllers/output.controller";
import ValidateToken from "../controllers/validate-token.controller";

const inputcontroller = new OutputController;
const validatetoken = new ValidateToken;

const router = Router();

router.post("/output",inputcontroller.addOutput);
router.get("/outputs",inputcontroller.getOutput);
router.get("/output/:idoutput",inputcontroller.getOneOutput);
router.put("/output/:idoutput",inputcontroller.updateOutput);
/*
router.post("/output",validatetoken.Token,inputcontroller.addInput);
router.get("/outputs",validatetoken.Token,inputcontroller.getInput);
router.get("/output/:idoutput",validatetoken.Token,inputcontroller.getOneInput);
router.put("/output/:idoutput",validatetoken.Token,inputcontroller.updateInput);
router.delete("/output/:idoutput",validatetoken.Token,inputcontroller.deleteStyle);*/

export default router