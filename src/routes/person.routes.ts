import { Router } from "express";

import PersonController from "../controllers/person.controller";

const person = new PersonController();
const router = Router();

router.post("/person", person.addPerson);

export default router;

// // class Authroute implements Routes{
// //     public path='/';
// //     public router: Router;
// //     public ruta1=new PersonController

// //     constructor() {
// //         this.InitializeRoutes();
// //       }

// //     private InitializeRoutes(){
// //         this.router.post(`${this.path}addperson`, this.ruta1.addPerson);

// //     }
// // }

// // export default Authroute;
