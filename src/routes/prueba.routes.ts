import { Router } from "express";
import PruebaController from "../controllers/pruebaquerycontroller";
import ValidateToken from "../controllers/validate-token.controller";

const pruebarolcontroller = new PruebaController;
const validatetoken =  new ValidateToken;
const router = Router();

router.get("/prueba",pruebarolcontroller.getNameRoles);
router.get("/lastOrder",validatetoken.Token,pruebarolcontroller.getLastOrder);

export default router;