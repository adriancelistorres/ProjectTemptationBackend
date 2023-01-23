import {Router} from "express"
import RolesController from "../controllers/roles.controller"


const rolescontroller = new RolesController;

const router = Router();

router.post("/roles",rolescontroller.addRoles);


export default router
