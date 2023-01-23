import {Router} from "express"
import RolesController from "../controllers/roles.controller"


const rolescontroller = new RolesController;

const router = Router();

router.post("/role",rolescontroller.addRoles);
router.get("/roles",rolescontroller.getRoles);
router.get("/role/:idrol",rolescontroller.getOneRol);
router.put("/role/:idrol",rolescontroller.updateRoles);
router.delete("/role/:idrol",rolescontroller.deleteRoles);

export default router
