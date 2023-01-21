import { Router } from "express";

import LoginController from "../controllers/login.controller";
import PersonController from "../controllers/person.controller";

const _loginController = new LoginController();
// const person = new PersonController();
const router = Router();

router.post("/login", _loginController.loginUser);
// router.post("/addperson",person.addPerson)

export default router;


