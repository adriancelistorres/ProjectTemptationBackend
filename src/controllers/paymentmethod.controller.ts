import { Request, Response } from "express";
import { IPaymentMethod } from "../Interfaces/IPaymentMethod";
import PaymentMethodservice from "../services/paymentmethod.service";


class PaymentmethodController{
    public async addPaymentMethod(req: Request, res: Response){
        try {
            const reqBody: IPaymentMethod =  req.body;
            const service = new PaymentMethodservice();
            const result =  await service.addServicePaymentMethod(reqBody.name_pay,reqBody);
            //return res.json(result);
            if (result?.name_pay === reqBody.name_pay) {
                return res.status(400).json({
                    msg: "Ya se agrego anteriormente"
                })
            } else {
                return res.status(200).json({
                    msg:  "Se agrego correctamente"
                })
            }
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
            const result = await service.UpdateServicePaymentMethod(resBody.name_pay,idpay,resBody);
            //return res.json(result)
            if(result?.state != resBody.state){
                return res.status(200).json({
                    msg: `activo`,
                  })
            }
            if (result?.name_pay === result?.name_pay) {
                return res.status(400).json({
                    msg: "Ya se agrego anteriormente"
                })
            } else {
                return res.status(200).json({
                    msg: "Se actualizo correctamente"
                })
                
            }
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