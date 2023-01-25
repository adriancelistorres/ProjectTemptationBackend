import Output from "../entities/Output";
import { IOutput } from "../Interfaces/IOutput";

class OutputService{
    public async getServiceOutput(){
        let respuesta: IOutput[] = ([] =[]);
        const prov =  await Output.find();
        prov.map((b) =>{
            let obj: IOutput = {idout: b.idout, idproduc: b.idproduc, stock: b.stock, dateout:b.dateout};
            respuesta.push(obj);
        })
        return respuesta;
    }
}