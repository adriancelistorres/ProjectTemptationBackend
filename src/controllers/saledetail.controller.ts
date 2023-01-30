import { Request, Response } from "express";
import SaleDetail from "../entities/Sale_Detail";
import { ISaleDetail } from "../Interfaces/ISaleDetail";
import SaleDetailService from "../services/saledetail.service";

class SaleDetailController{

    public async addSaleDatail(req: Request, res: Response){
        try {
            const reqBody: ISaleDetail =  req.body;
            const service = new SaleDetailService();
            const result =  await service.addServiceSaleDetail(reqBody);
            return res.json(result);
        } catch (error) {
            if(error instanceof Error){
                console.log(error.message)
                return res.status(500).json({message: error.message});
            }
        }
    }

    public async getSaleDetail(req: Request, res: Response){
        try {
            const service =  new SaleDetailService();
            const result = await service.getServiceSaleDetail();
            return res.json(result);
        } catch (error) {
            if(error instanceof Error){
                console.log(error.message);
                return res.status(500).json({message: error.message})
            }
        }
    }

    public async getOneSaleDetail(req: Request, res: Response){
        try {
            let idsale: number = parseInt(req.params.idsale);
            const service =  new SaleDetailService();
            const result =  await service.getServiceOneSaleDetail(idsale);
            return res.json(result);
        } catch (error) {
            if(error instanceof Error){
                console.log(error.message)
                return res.status(500).json({message: error.message});
            }
        }
    }

    public async updateSaleDetail(req: Request, res: Response){
        try {
            const idsale: number = parseInt(req.params.idsale);
            const resBody: ISaleDetail = req.body;
            const service = new SaleDetailService();
            const result =  await service.updateServiceSaleDetail(idsale, resBody);
            return res.json(result);
            
        } catch (error) {
            if(error instanceof Error){
                console.log(error.message);
                return res.status(500).json({message: error.message})
            }
        }
    }

    public async deleteSaleDetail(req: Request, res: Response){
        try {
            const idsale: number = parseInt(req.params.idsale);
            const service =  new SaleDetailService();
            const result = await service.deleteServiceSaleDetail(idsale);
            return res.json(result);
            
        } catch (error) {
            if(error instanceof Error){
                console.log(error.message);
                return res.status(500).json({nessage: error.message})
            }
        }
    }
}

export default SaleDetailController;