import { Router } from "express";
import ProductsController from "../controllers/products.controller";
import ValidateToken from "../controllers/validate-token.controller";

const productsController = new ProductsController;
const validatetoken =  new ValidateToken;

const router =  Router();

router.post("/addproduct",validatetoken.Token,productsController.addProduct);
router.get("/products",validatetoken.Token,productsController.getProducts);
router.get("/product/:idproduc",validatetoken.Token,productsController.getOneProduct);
router.put("/product/:idproduc",validatetoken.Token,productsController.UpdateProduct);
router.delete("/product/:idproduc",validatetoken.Token,productsController.deleteProduct);

export default router;