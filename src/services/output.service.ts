import Output from "../entities/Output";
import { IOutput } from "../Interfaces/IOutput";

class OutputService{

    /*Metodo para Agregar una Metodo de Pago */
    public async addServiceOutput(reqBody: IOutput){
        const output =  new Output();
        output.idout = reqBody.idout;
        output.idproduc =  reqBody.idproduc;
        output.stock=reqBody.stock;
        output.dateout=reqBody.dateout;
        return await output.save();
    }

    public async getServiceOutput(){
        let respuesta: IOutput[] = ([] =[]);
        const prov =  await Output.find();
        prov.map((b) =>{
            let obj: IOutput = {idout: b.idout, idproduc: b.idproduc, stock: b.stock, dateout:b.dateout};
            respuesta.push(obj);
        })
        return respuesta;
    }

     /*Metodo para Obtener un provevedor */
     public async getServiceOneOutput(idout: number){
        const output =  await Output.findOneBy({idout: idout});
        let respuesta: IOutput ={
            idout: output?.idout,
            idproduc: output?.idproduc,
            stock: output?.stock,
            dateout: output?.dateout,            
        }
        return respuesta;
    }

    /* Metodo para actualizar un provevedor */
    public async UpdateServiceOutput(idout:number, reqBody:IOutput){
       const out = await Output.findOneBy({idout:idout});

       if(!out) return Promise.reject("No hay Salidas de Productos");

       out.idout = reqBody.idout;
       out.idproduc = reqBody.idproduc;
       out.stock=reqBody.stock;
       out.dateout=reqBody.dateout, 
       out.save();
       return out;
    }

    /*Metodo para Eliminar un provevedor 
    public async deleteServicePaymentMethod(idout: number){
       const out = await Output.findOneBy({idout: idout});
       if(!out){
           return Promise.reject("No existe Salidas de Productos")
       }else{
        out.state = 0;
        out.save();
           return out;
       }
    }*/

}

export default OutputService;
