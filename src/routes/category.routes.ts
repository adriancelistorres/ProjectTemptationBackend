import { Router } from "express";
import CategoryController from "../controllers/category.controller";
import ValidateToken from "../controllers/validate-token.controller";

 const categorycontroller =  new CategoryController;
 const validatetoken =  new ValidateToken;

 const router =  Router();

 router.post("/category", validatetoken.Token,categorycontroller.addCategory);
 router.get("/categorys",validatetoken.Token, categorycontroller.getCategory);
 router.get("/category/:idcat",validatetoken.Token, categorycontroller.getOneCategory);
 router.put("/category/:idcat",validatetoken.Token, categorycontroller.updateCatgory);
 router.delete("/category/:idcat",validatetoken.Token, categorycontroller.deleteCategory);

 export default router;