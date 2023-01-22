import { Router } from "express";

import PersonController from "../controllers/person.controller";

const person = new PersonController();
const router = Router();

router.post("/addperson", person.addPerson);

export default router;

