import { AppDataSource } from "../databases/db";
import Category from "../entities/Category";
import { ICategory } from "../Interfaces/ICategory";

class CategoryService{
    /*Metodo para Agregar datos en la tabla */ 
    public async addServiceCategory(name_cat: string,reqBody: ICategory){
        try {
            const data = await AppDataSource.createQueryBuilder()
            .select("categoria")
            .from(Category, "categoria")
            .where("categoria.name_cat = :name_cat",{name_cat})
            .getOne();
            if (data?.name_cat != reqBody.name_cat) {
                const category =  new Category();
                category.idcat =  reqBody.idcat;
                category.name_cat = reqBody.name_cat;
                category.state =  reqBody.state;
                category.save();
                return data;
            } else {
                return data;
            }
        } catch (error) {
            return Promise.reject(" does not exist ");
        }
    }

    /*Metodo para Obtener todas las categorias */
    public async getServiceCategory(){
        let respuesta: ICategory[] = ([] = []);
        const category =  await Category.find();
        category.map((c) =>{
            let obj: ICategory ={idcat : c.idcat, name_cat: c.name_cat, state: c.state}
            respuesta.push(obj);
        })
        return respuesta;
    }

    /*Metodo para Obtener una categoria  */
    public async getServiceOneCategory(idcat:number){
        const category =  await Category.findOneBy({idcat: idcat});
        let respuesta: ICategory = {
            idcat: category?.idcat,
            name_cat: category?.name_cat,
            state: category?.state,
        }
        return respuesta;
    }

/*Metodo para Actualizar una Categoria */
    public async updateServiceCategory(name_cat: string,idcat:number,reqBody:ICategory){
        try {
            const categorys = await Category.findOneBy({ idcat:idcat });
            const data =  await AppDataSource.createQueryBuilder()
            .select("category")
            .from(Category, "category")
            .where("category.name_cat = :name_cat",{name_cat})
            .getOne();
            if (data?.state != reqBody.state) {
                if(!categorys) return Promise.reject("No hay Categoria");
        
                categorys.name_cat = reqBody.name_cat;
                categorys.state = reqBody.state;
                
                categorys.save();
        
                return data;
            } 
            if (data?.name_cat != reqBody.name_cat) {

                if(!categorys) return Promise.reject("No hay Categoria");
        
                categorys.name_cat = reqBody.name_cat;
                categorys.state = reqBody.state;
                
                categorys.save();
        
                return data;
            } else {
                return data;
            }
        } catch (error) {
            return Promise.reject(" does not update ");
        }
    }
    /**Metodo para Eliminar una categoria */
    public async deleteServiceCategory(idcat: number){
        const category = await Category.findOneBy({idcat:idcat});
        const error = {
            msg: "NO EXISTE ESTA CATEGORIA"
        }

        if(!category){
            return error
        }else{
            category.state = 0;
            category.save();
            return category
        }
    }
}

export default CategoryService