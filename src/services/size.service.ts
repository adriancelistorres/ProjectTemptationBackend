import Brand from "../entities/Brand";
import Size from "../entities/Size";
import { ISize } from "../Interfaces/ISize";

class sizeService{
    /*Metodo para Agregar un Tamano */
    public async addServiceSize(reqBody: ISize){
        const size =  new Size();
        size.idsize =  reqBody.idsize;
        size.name_size = reqBody.name_size;
        size.state =  reqBody.state
        return await size.save();
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
     public async UpdateServiceSize(idsize:number, reqBody: ISize){
        const size = await Size.findOneBy({idsize:idsize});
        if(!size) return Promise.reject("No hay tamano ");

        size.name_size =  reqBody.name_size;
        size.state = reqBody.state;

        size.save();
        return size;
     }

     /*Metodo para Eliminar un tamano */
     public async deleteServiceSize(idsize: number){
        const size =  await Size.findOneBy({idsize: idsize});
        if(!size){
            return Promise.reject("No existe un tamano")
        }else{
            size.state = 0;
            size.save();
            return size;
        }
     }

}
export default sizeService;