import {Router} from "express"
import RolesController from "../controllers/roles.controller"


const rolescontroller = new RolesController;

const router = Router();

router.post("/roles",rolescontroller.addRoles);
router.get("/roles",rolescontroller.getRoles);
router.get("/roles/:idrol",rolescontroller.getOneRol);
router.put("/roles/:idrol",rolescontroller.updateRoles);
router.delete("/roles/:idrol",rolescontroller.deleteRoles);

export default router
