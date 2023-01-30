import { Router } from "express";
import OrderController from "../controllers/order.controller";
import ValidateToken from "../controllers/validate-token.controller";
const validatetoken = new  ValidateToken();


const orderController = new OrderController();

const router =  Router();

router.post("/order", validatetoken.Token, orderController.addOrder);
router.get("/orders", validatetoken.Token, orderController.getOrder);
router.get("/order/:idorder", validatetoken.Token, orderController.getOneOrder);
router.put("/order/:idorder", validatetoken.Token, orderController.updateOrder);
router.delete("/order/:idorder", validatetoken.Token, orderController.deleteOrder);

export default router;