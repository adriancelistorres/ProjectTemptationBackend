import { Router } from "express";
import ProductsController from "../controllers/products.controller";
import ValidateToken from "../controllers/validate-token.controller";

const productsController = new ProductsController;
const validatetoken =  new ValidateToken;

const router =  Router();

//RUTAS PARA ADMIN
router.post("/addproduct",validatetoken.Token,productsController.addProduct);
router.get("/products",validatetoken.Token,productsController.getProducts);
router.get("/product/:idproduc",validatetoken.Token,productsController.getOneProduct);
router.put("/product/:idproduc",validatetoken.Token,productsController.UpdateProduct);
router.delete("/product/:idproduc",validatetoken.Token,productsController.deleteProduct);

//RUTAS PARA EL CLIENTE
router.get("/products2",productsController.getProducts);
router.get("/product2/:idproduc",productsController.getOneProduct);

export default router;