import { Request, Response } from "express";
import { ICategory } from "../Interfaces/ICategory";
import CategoryService from "../services/category.service";

class CategoryController{
    public async addCategory(req: Request, res: Response){
        const reqBody: ICategory =  req.body;
        const service = new CategoryService();
        const result =  await service.addCategory(reqBody);
        return res.json(result);
    }
}
export default CategoryController;