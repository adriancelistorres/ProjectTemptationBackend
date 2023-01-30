import { Request, Response } from "express";
import { IProvider } from "../Interfaces/IProvider";
import Providerservice from "../services/provider.service";

class ProviderController{
    public async addProvider(req: Request, res: Response){
        try {
            const reqBody: IProvider =  req.body;
            const service = new Providerservice();
            const result =  await service.addServiceProvider(reqBody);
            return res.json(result);
        } catch (error) {
            if(error instanceof Error){
                console.log(error.message)
                return res.status(500).json({message: error.message});
            }
        }
    }

    public async getProvider(req: Request, res: Response){
        try {
            const service = new Providerservice();
            const result =  await service.getServiceProvider();
            return res.json(result);
        } catch (error) {
            if(error instanceof Error){
                console.log(error.message);
                return res.status(500).json({message: error.message})
            }
        }
    }

    public async getOneProvider(req: Request, res: Response){
        try {
            let idprovider: number = parseInt(req.params.idprovider);
            const service =  new Providerservice();
            const result =  await service.getServiceOneProvider(idprovider);
            return res.json(result);

        } catch (error) {
            if(error instanceof Error){
                console.log(error.message)
                return res.status(500).json({message: error.message});
            }
        }
    }
    public async UpdateProvider(req: Request, res: Response){
        try {
            const idprovider: number =  parseInt(req.params.idprovider);
            const resBody:IProvider = req.body;
            const service = new Providerservice();
            const result = await service.UpdateServiceProvider(idprovider,resBody);
            return res.json(result)
        } catch (error) {
            if(error instanceof Error){
                console.log(error.message);
                return res.status(500).json({message: error.message})
               }
        }
    }



    public async deleteProvider(req: Request, res: Response){
        try {
            const idprovider: number =  parseInt(req.params.idprovider);
            const service =  new Providerservice();
            const result =  await service.deleteServiceProvider(idprovider);
            return res.json(result);
        } catch (error) {
            if(error instanceof Error){
                console.log(error.message);
                return res.status(500).json({nessage: error.message})
            }
        }
    }

}

export default ProviderController;