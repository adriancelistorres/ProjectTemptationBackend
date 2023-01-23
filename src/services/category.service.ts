import Category from "../entities/Category";
import { ICategory, ICategoryGet, ICategoryUpdate } from "../Interfaces/ICategory";

class CategoryService{
    /*Metodo para Agregar datos en la tabla */ 
    public async addServiceCategory(reqBody: ICategory){
        const category =  new Category();
        category.idcat =  reqBody.idcat;
        category.name_cat = reqBody.name_cat;
        category.state =  reqBody.state;
        return await category.save();
    }

    public async getServiceCategory(){
        let respuesta: ICategory[] = ([] = []);
        const category =  await Category.find();
        category.map((c) =>{
            let obj: ICategory ={idcat : c.idcat, name_cat: c.name_cat, state: c.state}
            respuesta.push(obj);
        })
        return respuesta;
    }

    public async getServiceOneCategory(idcat:number){
        const category =  await Category.findOneBy({idcat: idcat});
        let respuesta: ICategoryGet = {
            idcat: category?.idcat,
            name_cat: category?.name_cat,
            state: category?.state,
        }
        return respuesta;
    }

    public async UpdateServiceCategory(idcat:number,reqBody:ICategoryUpdate){
        const categorys = await Category.findOneBy({ idcat:idcat });

        if(!categorys) return Promise.reject("No hay Categoria");

        categorys.name_cat = reqBody.name_cat;
        categorys.state = reqBody.state;
        
        categorys.save();

        return categorys;
    }


}


export default CategoryService