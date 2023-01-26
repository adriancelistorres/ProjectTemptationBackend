import { Router } from "express";
import PaymentmethodController from "../controllers/paymentmethod.controller";
import ValidateToken from "../controllers/validate-token.controller";


const paymenthmethodController = new PaymentmethodController;
const validatetoken =  new ValidateToken;


const router =  Router();

router.post("/paymentmethod",validatetoken.Token,paymenthmethodController.addPaymentMethod);
router.get("/paymentmethods",validatetoken.Token,paymenthmethodController.getPaymentMethod);
router.get("/paymentmethod/:idpay",validatetoken.Token,paymenthmethodController.getOnePaymentMethod);
router.put("/paymentmethod/:idpay",validatetoken.Token,paymenthmethodController.updatePaymentMethod);
router.delete("/paymentmethod/:idpay",validatetoken.Token,paymenthmethodController.deletePaymentMethod);

export default router;