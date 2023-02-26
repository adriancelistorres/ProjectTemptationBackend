import { Request, Response } from "express";
import Income_DetIncomeService from "../services/Income_DetIncome.service";

class IncomeDetIncome{
    public async getNameRoles(req: Request, res:Response){
        try {
            const idicome: number = parseInt(req.params.idicome)
            const service = new Income_DetIncomeService();
            const result = await service.GetIncomewhitDetIncome(idicome);
            return res.json(result);
        } catch (error) {
            if (error instanceof Error) {

                console.log(error.message)
                return res.status(500).json({ message: error.message });
            }
        }
    }
}
export default IncomeDetIncome;