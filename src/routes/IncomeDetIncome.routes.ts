import { Router } from "express";
import IncomeDetIncome from "../controllers/Income_detIncomeService.controller";

const incomeDetIncome =  new IncomeDetIncome;
const router =  Router();

router.get("/IncomeDetaila/:idicome",incomeDetIncome.getNameRoles);

export default router;