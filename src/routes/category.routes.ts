import { Router } from "express";
import CategoryController from "../controllers/category.controller";

 const categorycontroller =  new CategoryController;

 const router =  Router();

 router.post("/category",categorycontroller.addCategory);

 export default router;