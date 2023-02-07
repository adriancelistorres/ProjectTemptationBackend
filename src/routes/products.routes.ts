import { Router } from "express";
import ProductsController from "../controllers/products.controller";
import ValidateToken from "../controllers/validate-token.controller";

const productsController = new ProductsController;
const validatetoken =  new ValidateToken;

const router =  Router();

router.post("/addproduct",productsController.addProduct);
router.get("/products",productsController.getProducts);
router.get("/product/:idproduc",productsController.getOneProduct);
router.put("/product/:idproduc",productsController.UpdateProduct);
router.delete("/product/:idproduc",productsController.deleteProduct);

export default router;