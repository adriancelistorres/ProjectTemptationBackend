import { Request, Response } from "express";
import { IPaymentMethod } from "../Interfaces/IPaymentMethod";
import PaymentMethodservice from "../services/paymentmethod.service";


class PaymentmethodController{
    public async addPaymentMethod(req: Request, res: Response){
        try {
            const reqBody: IPaymentMethod =  req.body;
            const service = new PaymentMethodservice();
            const result =  await service.addServicePaymentMethod(reqBody);
            return res.json(result);
        } catch (error) {
            if(error instanceof Error){
                console.log(error.message)
                return res.status(500).json({message: error.message});
            }
        }
    }

    public async getPaymentMethod(req: Request, res: Response){
        try {
            const service = new PaymentMethodservice();
            const result =  await service.getServicePaymentMethod();
            return res.json(result);
        } catch (error) {
            if(error instanceof Error){
                console.log(error.message);
                return res.status(500).json({message: error.message})
            }
        }
    }

    public async getOnePaymentMethod(req: Request, res: Response){
        try {
            let idpay: number = parseInt(req.params.idpay)
            const service =  new PaymentMethodservice();
            const result =  await service.getServiceOnePaymentMethod(idpay);
            return res.json(result);

        } catch (error) {
            if(error instanceof Error){
                console.log(error.message)
                return res.status(500).json({message: error.message});
            }
        }
    }
    public async updatePaymentMethod(req: Request, res: Response){
        try {
            const idpay: number =  parseInt(req.params.idpay);
            const resBody:IPaymentMethod = req.body;
            const service = new PaymentMethodservice();
            const result = await service.UpdateServicePaymentMethod(idpay,resBody);
            return res.json(result)
        } catch (error) {
            if(error instanceof Error){
                console.log(error.message);
                return res.status(500).json({message: error.message})
               }
        }
    }



    public async deletePaymentMethod(req: Request, res: Response){
        try {
            const idpay: number =  parseInt(req.params.idpay);
            const service =  new PaymentMethodservice();
            const result =  await service.deleteServicePaymentMethod(idpay);
            return res.json(result);
        } catch (error) {
            if(error instanceof Error){
                console.log(error.message);
                return res.status(500).json({nessage: error.message})
            }
        }
    }

}

export default PaymentmethodController;