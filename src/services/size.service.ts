import { AppDataSource } from "../databases/db";
import Brand from "../entities/Brand";
import Size from "../entities/Size";
import { ISize } from "../Interfaces/ISize";

class SizeService{
    /*Metodo para Agregar un Tamano */
    public async addServiceSize(name_size: string,reqBody: ISize){
        try {
            const data =  await AppDataSource.createQueryBuilder()
            .select("size")
            .from(Size, "size")
            .where("size.name_size = :name_size",{name_size})
            .getOne();
            if (data?.name_size != reqBody.name_size) {
                const size =  new Size();
                size.idsize =  reqBody.idsize;
                size.name_size = reqBody.name_size;
                size.state =  reqBody.state
                size.save();
                return data;
            } else {
                return data;
            }
        } catch (error) {
            return Promise.reject(" does not exist ");
        }
    }
    /*Metodo para Obtener una tamano */
    public async getServiceSize(){
        let respuesta: ISize[] = ([] = []);
        const size =  await Size.find();
        size.map((s) =>{
            let obj: ISize = {idsize: s.idsize, name_size: s.name_size, state: s.state}
            respuesta.push(obj);
        })
        return respuesta;
    }
    /*Metodo para Obtener un tamano en especifico */
     public async getServiceOneSize(idsize: number){
        const size = await Size.findOneBy({idsize:idsize});
        let respues: ISize = {
            idsize: size?.idsize,
            name_size: size?.name_size,
            state: size?.state
        }
        return respues;
     }
     /*Metodo para Actualizar una tamano */
     public async updateServiceSize(name_size: string,idsize:number, reqBody: ISize){
        try {
            const size = await Size.findOneBy({idsize:idsize});
            const data = await AppDataSource.createQueryBuilder()
            .select("size")
            .from(Size, "size")
            .where("size.name_size = :name_size",{name_size})
            .getOne();
            if (data?.state != reqBody.state) {
                if(!size) return Promise.reject("No hay Tamaño ");
                size.name_size =  reqBody.name_size;
                size.state = reqBody.state;    
                size.save();
                return data;
            }

            if (data?.name_size != reqBody.name_size) {
                if(!size) return Promise.reject("No hay Tamaño ");
                size.name_size =  reqBody.name_size;
                size.state = reqBody.state;
                size.save();
                return data;
            } else {
                return data
            }
        } catch (error) {
            return Promise.reject(" does not update ");
        }
     }

     /*Metodo para Eliminar un tamano */
     public async deleteServiceSize(idsize: number){
        const size =  await Size.findOneBy({idsize: idsize});
        const error ={
            msg: "NO EXISTE ESTE TAMAÑO"
        }

        if(!size){
            return error
        }else{
            size.state = 0;
            size.save();
            return size;
        }
     }

}
export default SizeService;