import Category from "../entities/Category";
import { ICategory } from "../Interfaces/ICategory";

class CategoryService{
    /*Metodo para Agregar datos en la tabla */ 
    public async addServiceCategory(reqBody: ICategory){
        const category =  new Category();
        category.idcat =  reqBody.idcat;
        category.name_cat = reqBody.name_cat;
        category.state =  reqBody.state;
        return await category.save();
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
    public async updateServiceCategory(idcat:number,reqBody:ICategory){
        const categorys = await Category.findOneBy({ idcat:idcat });

        if(!categorys) return Promise.reject("No hay Categoria");

        categorys.name_cat = reqBody.name_cat;
        categorys.state = reqBody.state;
        
        categorys.save();

        return categorys;
    }
    /**Metodo para Eliminar una categoria */
    public async deleteServiceCategory(idcat: number){
        const category = await Category.findOneBy({idcat:idcat});
        if(!category){
            return Promise.reject("No existe esa Categoria");
        }else{
            category.state = 0;
            category.save();
            return category
        }
    }


}


export default CategoryService