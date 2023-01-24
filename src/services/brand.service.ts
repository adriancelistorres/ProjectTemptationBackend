import Brand from "../entities/Brand"
import { IBrand } from "../Interfaces/IBrand";

class brandservice{
    /*Metodo para Agregar una Marca */
    public async addServiceBrand(reqBody: IBrand){
        const brand =  new Brand();
        brand.idbrand = reqBody.idbrand;
        brand.name_brand =  reqBody.name_brand;
        brand.state =  reqBody.state
        return await brand.save();
    }

    /*Metodo para Obtener todas marcas */
    public async getServiceBrand(){
        let respuesta: IBrand[] = ([] =[]);
        const brand =  await Brand.find();
        brand.map((b) =>{
            let obj: IBrand = {idbrand: b.idbrand, name_brand: b.name_brand, state: b.state};
            respuesta.push(obj);
        })
        return respuesta;
    }

     /*Metodo para Obtener una marca */
     public async getServiceOneBrand(idbrand: number){
         const brand =  await Brand.findOneBy({idbrand: idbrand});
         let respuesta: IBrand ={
            idbrand: brand?.idbrand,
            name_brand: brand?.name_brand,
            state: brand?.state,
         }
         return respuesta;
     }

     /* Metodo para actualizar una marca */
     public async UpdateServiceBrand(idbrand:number, reqBody:IBrand){
        const brand = await Brand.findOneBy({idbrand:idbrand});

        if(!brand) return Promise.reject("No hay Marca");

        brand.name_brand = reqBody.name_brand;
        brand.state = reqBody.state;

        brand.save();
        return brand;
     }

     /*Metodo para Eliminar una marca */
     public async deleteServiceBrand(idbrand: number){
        const brand = await Brand.findOneBy({idbrand: idbrand});
        if(!brand){
            return Promise.reject("No existe una marca")
        }else{
            brand.state = 0;
            brand.save();
            return brand;
        }
     }

}

export default brandservice;