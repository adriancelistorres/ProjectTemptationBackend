import { Router } from "express";
import SaleDetailController from "../controllers/saledetail.controller";
import ValidateToken from "../controllers/validate-token.controller";

const salecontroller = new SaleDetailController;
const validatetoken = new ValidateToken;

const router =  Router();

router.post("/saledetail", validatetoken.Token, salecontroller.addSaleDatail);
router.get("/saledetails", validatetoken.Token, salecontroller.getSaleDetail);
router.get("/saledetail/:idsale", validatetoken.Token, salecontroller.getOneSaleDetail);
router.put("/saledetail/:idsale", validatetoken.Token, salecontroller.updateSaleDetail);
router.delete("/saledetail/:idsale", validatetoken.Token, salecontroller.deleteSaleDetail);

export default router;