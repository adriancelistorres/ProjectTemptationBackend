import { Router } from "express";
import CategoryController from "../controllers/category.controller";
import ValidateToken from "../controllers/validate-token.controller";

 const categorycontroller =  new CategoryController;
 const validatetoken =  new ValidateToken;

 const router =  Router();

 router.post("/category", validatetoken.Token,categorycontroller.addCategory);
 router.get("/categorys", categorycontroller.getCategory);
 router.get("/category/:idcat", categorycontroller.getCategoryOne);
 router.put("/category/:idcat", categorycontroller.updateCatgory);
 router.delete("/category/:idcat", categorycontroller.deleteCategory);

 export default router;