import { Request, Response } from "express";
import { IBrand } from "../Interfaces/IBrand";
import brandservice from "../services/brand.service";

class BrandController{
    public async addBrnad(req: Request, res: Response){
        try {
            const reqBody: IBrand =  req.body;
            const service = new brandservice();
            const result =  await service.addServiceBrand(reqBody);
            return res.json(result);
        } catch (error) {
            if(error instanceof Error){
                console.log(error.message)
                return res.status(500).json({message: error.message});
            }
        }
    }
}

export default BrandController;