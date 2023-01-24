import { Router } from "express";
import CategoryController from "../controllers/category.controller";

 const categorycontroller =  new CategoryController;

 const router =  Router();

 router.post("/category",categorycontroller.addCategory);
 router.get("/categorys", categorycontroller.getCategory);
 router.get("/category/:idcat", categorycontroller.getCategoryOne);
 router.put("/category/:idcat", categorycontroller.updateCatgory);
 router.delete("/category/:idcat", categorycontroller.deleteCategory);

 export default router;