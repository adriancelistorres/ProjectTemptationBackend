import { Router } from "express";
import DetailIncomeController from "../controllers/detailincome.controller";

const detailincome = new DetailIncomeController;

const router =  Router();

router.post("/detailincome",detailincome.addDetailIncome);
router.get("/detailincomes",detailincome.getDetailIncome);
router.get("/detailincome/:idincome",detailincome.getOneDetailIncome);
router.put("/detailincome/:idincome",detailincome.updateDetailIncome);
/*router.delete("/detailincome/:idincome",detailincome.deleteDetailIncome);*/

export default router;