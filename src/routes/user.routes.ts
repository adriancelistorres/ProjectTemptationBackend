import { Router } from "express";

import LoginController from "../controllers/login.controller";

const _loginController = new LoginController();

const router = Router();

router.post("/login", _loginController.loginUser);

export default router;
