import { Router } from "express";

import PersonController from "../controllers/person.controller";
import ValidateToken from "../controllers/validate-token.controller";

const person = new PersonController;

const router = Router();

router.post("/addperson", person.addPerson);
router.get("/persons",person.getPerson);
router.get("/person/:idperson",person.getOnePerson);
router.put("/person/:idperson",person.UpdatePerson);
router.delete("/person/:idperson",person.deletePerson);

export default router;

