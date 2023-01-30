import { Request, Response } from "express";
import { IOrder } from "../Interfaces/IOrder";
import Orderservice from "../services/order.service";

class OrderController{
    public async addOrder(req: Request, res: Response){
        try {
            const reqBody: IOrder =  req.body;
            const service = new Orderservice();
            const result = await service.addServiceOrder(reqBody);
            return res.json(result);
            
        } catch (error) {
            if(error instanceof Error){
                console.log(error.message)
                return res.status(500).json({message: error.message});
            }
        }
    }   
    public async getOrder(req: Request, res: Response){
        try {
            const service =  new Orderservice();
            const result =  await service.getServiceOrder();
            return res.json(result);
        } catch (error) {
            if(error instanceof Error){
                console.log(error.message);
                return res.status(500).json({message: error.message})
            }
        }
    }

    public async getOneOrder(req: Request, res: Response){
        try {
            let idorder: number = parseInt(req.params.idorder);
            const service =  new Orderservice();
            const result =  await service.getServiceOneOrder(idorder);
            return res.json(result);
        } catch (error) {
            if (error instanceof Error) {
                console.log(error.message)
                return res.status(500).json({ message: error.message });
            }
        }
    }

    public async updateOrder(req: Request, res: Response){
        try {
            const idorder: number =  parseInt(req.params.idorder);
            const resBody: IOrder =  req.body;
            const service =  new Orderservice();
            const result =  await service.updateServiceOrder(idorder,resBody);
            return res.json(result);
            
        } catch (error) {
            if(error instanceof Error){
                console.log(error.message);
                return res.status(500).json({message: error.message})
            }
        }
    }

    public async deleteOrder(req:Request, res: Response){
        try {
            const idorder: number = parseInt(req.params.idorder);
            const service =  new Orderservice();
            const result =  await service.deleteServiceOrder(idorder);
            return res.json(result);
        } catch (error) {
            if(error instanceof Error){
                console.log(error.message);
                return res.status(500).json({nessage: error.message})
            }
        }
    }
}
export default OrderController;