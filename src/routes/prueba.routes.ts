import { Router } from "express";
import PruebaController from "../controllers/pruebaquerycontroller";

const pruebarolcontroller = new PruebaController;
const router = Router();

router.get("/prueba",pruebarolcontroller.getNameRoles);

export default router;