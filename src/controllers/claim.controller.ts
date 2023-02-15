import { Request, Response } from "express";
import { IClaims } from "../Interfaces/IClaims";
import ClaimService from "../services/claim.service";

class ClaimController{
    public async addClaim(req: Request, res: Response){
        try {
            const reqBody: IClaims =  req.body;
            const service = new ClaimService();
            const result =  await service.addServiceClaim(reqBody);
            return res.json(result);
        } catch (error) {
            if(error instanceof Error){
                console.log(error.message)
                return res.status(500).json({message: error.message});
            }
        }
    }

    public async getClaim(req: Request, res: Response){
        try {
            const service =  new ClaimService();
            const result = await service.getServiceClaim();
            return res.json(result);
        } catch (error) {
            if(error instanceof Error){
                console.log(error.message);
                return res.status(500).json({message: error.message})
            }
        }
    }


    public async getOneClaim(req: Request, res: Response){
        try {
            let idclaims: number = parseInt(req.params.idclaims);
            const service =  new ClaimService();
            const result =  await service.getServiceOneClaim(idclaims);
            return res.json(result);
        } catch (error) {
            if(error instanceof Error){
                console.log(error.message)
                return res.status(500).json({message: error.message});
            }
        }
    }


    public async updateClaim(req: Request, res: Response){
        try {
            const idclaims: number = parseInt(req.params.idclaims);
            const resBody: IClaims = req.body;
            const service = new ClaimService();
            const result =  await service.updateServiceClaim(idclaims, resBody);
            return res.json(result);
            
        } catch (error) {
            if(error instanceof Error){
                console.log(error.message);
                return res.status(500).json({message: error.message})
            }
        }
    }

    public async deleteClaim(req: Request, res: Response){
        try {
            const idclaims: number = parseInt(req.params.idclaims);
            const service =  new ClaimService();
            const result = await service.deleteServiceClaim(idclaims);
            return res.json(result);
            
        } catch (error) {
            if(error instanceof Error){
                console.log(error.message);
                return res.status(500).json({nessage: error.message})
            }
        }
    }
}

export default ClaimController;