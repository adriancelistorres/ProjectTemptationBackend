import { Router } from "express";
import IncomeController from "../controllers/income.controller";

const income = new IncomeController;

const router =  Router();

router.post("/income",income.addIncome);
router.get("/incomes",income.getIncome);
router.get("/income/:idicome",income.getOneIncome);
router.put("/income/:idicome",income.UpdateIncome);
router.delete("/income/:idicome",income.deleteIncome);

export default router;