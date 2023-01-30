import { Router } from "express";

import LoginController from "../controllers/login.controller";
import ValidateToken from "../controllers/validate-token.controller";
const validatetoken =  new ValidateToken;


const _loginController = new LoginController();
const router = Router();

router.post("/login", _loginController.login);

export default router;
