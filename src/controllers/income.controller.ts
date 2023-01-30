import { Request, Response } from "express";
import { IIncome } from "../Interfaces/IIncome";
import IncomeService from "../services/income.service";

class IncomeController{

    public async addIncome(req: Request, res: Response){
        try {
            const reqBody: IIncome =  req.body;
            const service = new IncomeService();
            const result =  await service.addServiceIncome(reqBody);
            return res.json(result);
        } catch (error) {
            if(error instanceof Error){
                console.log(error.message)
                return res.status(500).json({message: error.message});
            }
        }
    }

    public async getIncome(req: Request, res: Response){
        try {
            const service = new IncomeService();
            const result =  await service.getServiceIncome();
            return res.json(result);
        } catch (error) {
            if(error instanceof Error){
                console.log(error.message);
                return res.status(500).json({message: error.message})
            }
        }
    }

    public async getOneIncome(req: Request, res: Response){
        try {
            let idicome: number = parseInt(req.params.idicome)
            const service =  new IncomeService();
            const result =  await service.getServiceOneIncome(idicome);
            return res.json(result);

        } catch (error) {
            if(error instanceof Error){
                console.log(error.message)
                return res.status(500).json({message: error.message});
            }
        }
    }

    public async UpdateIncome(req: Request, res: Response){
        try {
            const idicome: number =  parseInt(req.params.idicome);
            const resBody:IIncome = req.body;
            const service = new IncomeService();
            const result = await service.UpdateServiceIncome(idicome,resBody);
            return res.json(result)
        } catch (error) {
            if(error instanceof Error){
                console.log(error.message);
                return res.status(500).json({message: error.message})
            }
        }
    }

    public async deleteIncome(req: Request, res: Response){
        try {
            const idicome: number =  parseInt(req.params.idicome);
            const service =  new IncomeService();
            const result =  await service.deleteServiceIncome(idicome);
            return res.json(result);
        } catch (error) {
            if(error instanceof Error){
                console.log(error.message);
                return res.status(500).json({nessage: error.message})
            }
        }
    }

}

export default IncomeController;