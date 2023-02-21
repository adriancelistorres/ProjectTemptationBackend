import { Request, Response } from "express";
import { IBrand } from "../Interfaces/IBrand";
import brandservice from "../services/brand.service";

class BrandController{
    public async addBrand(req: Request, res: Response){
        try {
            const reqBody: IBrand =  req.body;
            const service = new brandservice();
            const result =  await service.addServiceBrand(reqBody.name_brand,reqBody);
            // return res.json(result);
            if(result?.name_brand===reqBody.name_brand){
                return res.status(400).json({
                    msg: `Ya se agrego anteriormente`,
                  })}
            else{
                return res.status(200).json({
                    msg: `Se agrego correctamente`,
                  })
            }
          
           
        } catch (error) {
            if(error instanceof Error){
                console.log(error.message)
                return res.status(500).json({message: error.message});
            }
        }
    }

    public async getBrand(req: Request, res: Response){
        try {
            const service = new brandservice();
            const result =  await service.getServiceBrand();
            return res.json(result);
        } catch (error) {
            if(error instanceof Error){
                console.log(error.message);
                return res.status(500).json({message: error.message})
            }
        }
    }

    public async getOneBrand(req: Request, res: Response){
        try {
            let idbrand: number = parseInt(req.params.idbrand)
            const service =  new brandservice();
            const result =  await service.getServiceOneBrand(idbrand);
            return res.json(result);

        } catch (error) {
            if(error instanceof Error){
                console.log(error.message)
                return res.status(500).json({message: error.message});
            }
        }
    }
    public async UpdateBrand(req: Request, res: Response){
        try {
            const idcat: number =  parseInt(req.params.idbrand);
            const resBody:IBrand = req.body;
            const service = new brandservice();
            const result = await service.updateServiceBrand(resBody.name_brand,idcat,resBody);
            // return res.json(result)
            if(result?.state!=resBody.state){
                return res.status(200).json({
                    msg: `activo`,
                  })
            }


            if(result?.name_brand===resBody.name_brand){
                return res.status(400).json({
                    msg: `Ya se agrego anteriormente`,
                  })}
            else{
                return res.status(200).json({
                    msg: `Se agrego correctamente`,
                  })
            }
        } catch (error) {
            if(error instanceof Error){
                console.log(error.message);
                return res.status(500).json({message: error.message})
            }
        }
    }



    public async deleteBrand(req: Request, res: Response){
        try {
            const idbrand: number =  parseInt(req.params.idbrand);
            const service =  new brandservice();
            const result =  await service.deleteServiceBrand(idbrand);
            return res.json(result);
        } catch (error) {
            if(error instanceof Error){
                console.log(error.message);
                return res.status(500).json({nessage: error.message})
            }
        }
    }

}

export default BrandController;