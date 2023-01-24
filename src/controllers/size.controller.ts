import { Request, Response } from "express";
import { ISize } from "../Interfaces/ISize";
import sizeService from "../services/size.service";

class SizeController{
    public async addSize(req: Request, res: Response){
        try {
            const reqBody: ISize = req.body;
            const service =  new sizeService();
            const result =  await service.addServiceSize(reqBody);
            return res.json(result)
        } catch (error) {
            if(error instanceof Error){
                console.log(error.message)
                return res.status(500).json({message: error.message});
            }
        }
    }
    
}
export default SizeController;