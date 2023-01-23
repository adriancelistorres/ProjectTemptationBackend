import Category from "../entities/Category";
import { ICategory } from "../Interfaces/ICategory";

class CategoryService{
    public async addCategory(reqBody: ICategory){
        const category =  new Category();
        category.idcat =  reqBody.idcat;
        category.name_cat = reqBody.name_cat;
        category.state =  reqBody.state;
        return await category.save();
    }
}

export default CategoryService