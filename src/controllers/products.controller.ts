import { Request, Response } from "express";
import { IProducts } from "../Interfaces/IProducts";
import ProductsService from "../services/products.service";

class ProductsController{

    public async addProduct(req:Request,res:Response){
        try {
            const reqBody:IProducts=req.body;
            const service=new ProductsService();
            const result=await service.addServiceProducts(reqBody.name_p,reqBody);
            //return res.json(result)
            if (result?.name_p === reqBody.name_p) {
                return res.status(400).json({
                    msg: "Ya se agrego anteriormente"
                })
            } else {
                return res.status(200).json({
                    msg: "Se agrego correctamente"
                })
            }

        } catch (error) {
            if (error instanceof Error) {
                console.log(error.message)
                return res.status(500).json({ message: error.message });
            }
        }
    }

    public async getProducts(req: Request, res: Response){
        try {
            const service = new ProductsService();
            const result =  await service.getServiceProducts();
            return res.json(result);
        } catch (error) {
            if(error instanceof Error){
                console.log(error.message);
                return res.status(500).json({message: error.message})
            }
        }
    }

    public async getOneProduct(req: Request, res: Response){
        try {
            let idproduc: number = parseInt(req.params.idproduc);
            const service =  new ProductsService();
            const result =  await service.getServiceOneProduct(idproduc);
            return res.json(result);

        } catch (error) {
            if(error instanceof Error){
                console.log(error.message)
                return res.status(500).json({message: error.message});
            }
        }
    }

    public async UpdateProduct(req: Request, res: Response){
        try {
            const idproduc: number =  parseInt(req.params.idproduc);
            const resBody:IProducts = req.body;
            const service = new ProductsService();
            const result = await service.UpdateServiceProduct(resBody.name_p, idproduc,resBody);
            return res.json(result)
            // if (result?.state != resBody.state) {
            //     return res.status(200).json({
            //         msg: "Activo",
            //     })
            // }
            
            // if(result?.name_p==resBody.name_p ){
            //     return res.status(400).json({
            //         msg: "Ya se agrego anteriormente",
            //     })
            // }else{
            //     return res.status(200).json({
            //         msg: "Se agrego correctamente",
            //     })
            // }
        } catch (error) {
            if(error instanceof Error){
                console.log(error.message);
                return res.status(500).json({message: error.message})
               }
        }
    }

    public async deleteProduct(req: Request, res: Response){
        try {
            const idproduc: number =  parseInt(req.params.idproduc);
            const service =  new ProductsService();
            const result =  await service.deleteServiceProduct(idproduc);
            return res.json(result);
        } catch (error) {
            if(error instanceof Error){
                console.log(error.message);
                return res.status(500).json({nessage: error.message})
            }
        }
    }

}
export default ProductsController;