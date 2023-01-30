import {Router} from "express"
import RolesController from "../controllers/roles.controller"
import ValidateToken from "../controllers/validate-token.controller";


const rolescontroller = new RolesController;
const validatetoken =  new ValidateToken;



const router = Router();

router.post("/role",validatetoken.Token,rolescontroller.addRoles);
router.get("/roles",validatetoken.Token,rolescontroller.getRoles);
router.get("/role/:idrol",validatetoken.Token,rolescontroller.getOneRol);
router.put("/role/:idrol",validatetoken.Token,rolescontroller.updateRoles);
router.delete("/role/:idrol",validatetoken.Token,rolescontroller.deleteRoles);

export default router
