import { Router } from "express";
import PaymentmethodController from "../controllers/paymentmethod.controller";


const paymenthmethodController = new PaymentmethodController;

const router =  Router();

router.post("/paymentmethod",paymenthmethodController.addPaymentMethod);
router.get("/paymentmethods",paymenthmethodController.getPaymentMethod);
router.get("/paymentmethod/:idpay",paymenthmethodController.getOnePaymentMethod);
router.put("/paymentmethod/:idpay",paymenthmethodController.updatePaymentMethod);
router.delete("/paymentmethod/:idpay",paymenthmethodController.deletePaymentMethod);

export default router;