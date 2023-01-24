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
    // public async getServiceOneSize(idsize: number){
    //     const 
    // }
}
export default sizeService;