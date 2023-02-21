import { Request, Response } from "express";
import { ISize } from "../Interfaces/ISize";
import sizeService from "../services/size.service";

class SizeController{
    public async addSize(req: Request, res: Response){
        try {
            const reqBody: ISize = req.body;
            const service =  new sizeService();
            const result =  await service.addServiceSize(reqBody.name_size,reqBody);
            //return res.json(result)
            if (result?.name_size ===reqBody.name_size) {
                return res.status(400).json({
                    msg: "Ya se agrego anterormete",
                })
            } else {
                return res.status(200).json({
                    msg: "Se agrego correctamente",
                })
                
            }
        } catch (error) {
            if(error instanceof Error){
                console.log(error.message)
                return res.status(500).json({message: error.message});
            }
        }
    }

    public async getSize(req: Request, res: Response){
        try {
            const service =  new sizeService();
            const result =  await service.getServiceSize();
            return res.json(result);
        } catch (error) {
            if(error instanceof Error){
                console.log(error.message);
                return res.status(500).json({message: error.message})
            }
        }
    }

    public async getOneSize(req: Request, res: Response){
        try {
            let idsize: number = parseInt(req.params.idsize);
            const service = new sizeService();
            const result =  await service.getServiceOneSize(idsize);
            return res.json(result);
        } catch (error) {
            if(error instanceof Error){
                console.log(error.message)
                return res.status(500).json({message: error.message});
            }
        }
    }

    public async UpdateSize(req: Request, res: Response){
        try {
            const idsize: number =  parseInt(req.params.idsize);
            const resBody: ISize =  req.body;
            const service = new sizeService();
            const result = await service.updateServiceSize(resBody.name_size,idsize,resBody);
            //return res.json(result);
            if (result?.state!=resBody.state) {
                return res.status(200).json({
                    msg: "activo"
                })
            }
            if (result?.name_size === result?.name_size) {
                return res.status(400).json({
                    msg: "Ya se agrego anteriormente"
                })
            } else {
                return res.status(200).json({
                    msg: "Se actualizao correctamente"
                })
            }
        } catch (error) {
            if(error instanceof Error){
                console.log(error.message);
                return res.status(500).json({message: error.message})
            }    
        }
    }

    public async deleteSize(req: Request, res: Response){
        try {
            const idsize:number = parseInt(req.params.idsize);
            const service = new sizeService();
            const result =  await service.deleteServiceSize(idsize);
            return res.json(result);
        } catch (error) {
            if(error instanceof Error){
                console.log(error.message);
                return res.status(500).json({nessage: error.message})
            }
        }
    }
    
}
export default SizeController;