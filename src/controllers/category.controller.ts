import { Request, Response } from "express";
import { ICategory} from "../Interfaces/ICategory";
import CategoryService from "../services/category.service";

class CategoryController{
    public async addCategory(req: Request, res: Response){
        try{
            const reqBody: ICategory =  req.body;
            const service = new CategoryService();
            const result =  await service.addServiceCategory(reqBody);
            return res.json(result);
        }catch(error){
            if (error instanceof Error) {
                console.log(error.message)
                return res.status(500).json({ message: error.message });
        }
        }
    }

    public async getCategory(req: Request, res: Response){
        try {
            const service =  new CategoryService();
            const result =  await service.getServiceCategory();
            return res.json(result);
        } catch (error) {
            if (error instanceof Error) {
                console.log(error.message)
                return res.status(500).json({ message: error.message });
        }
        }
    }

    public async getOneCategory(req: Request, res: Response){
        try {
            let idcat:number = parseInt(req.params.idcat) 
            const service =  new CategoryService();
            const result =  await service.getServiceOneCategory(idcat);
            return res.json(result);
        } catch (error) {
            if (error instanceof Error) {
                console.log(error.message)
                return res.status(500).json({ message: error.message });
        }
        }
    }

    public async updateCatgory(req:Request,res: Response){
        try {
            const idcat:number =  parseInt(req.params.idcat);
            const resBody:ICategory =  req.body;
            const service= new CategoryService();
            const resulta =  await service.updateServiceCategory(idcat,resBody);
            return res.json(resulta);

        } catch (error) {
           if(error instanceof Error){
            console.log(error.message);
            return res.status(500).json({message: error.message})
           }
        }
    }

    public async deleteCategory (req: Request, res: Response){
        try {
            const idcat: number =  parseInt(req.params.idcat);
            const service =  new CategoryService();
            const result =  await service.deleteServiceCategory(idcat);
            return res.json(result);
        } catch (error) {
            if(error instanceof Error){
                console.log(error.message);
                return res.status(500).json({nessage: error.message})
            }
        }
    }
}




export default CategoryController;