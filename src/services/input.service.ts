import Input from "../entities/Input";
import { IInput } from "../Interfaces/IInput";

class InputService{
    public async addServiceInput(reqBody:IInput){
        const input = new Input();
        input.idinput = reqBody.idinput;
        input.idproduc = reqBody.idproduc;
        input.stock = reqBody.stock;
        input.dateinp = reqBody.dateinp;
        return await input.save();
    }

    public async getServiceInput(){
        let respuesta:IInput [] = [];
        const input = await Input.find();
        input.map((c)=>{
            let obj:IInput = {
                idinput: c.idinput,
                idproduc:c.idproduc,
                stock:c.stock,
                dateinp:c.dateinp
            };
            respuesta.push(obj);
        })
        return respuesta;
    }

    public async getServiceOneInput(idinput:number){
        const rol = await Input.findOneBy({idinput:idinput});
        let respuesta:IInput = {
            idinput:rol?.idinput,
            idproduc:rol?.idproduc,
            stock:rol?.stock,
            dateinp:rol?.dateinp
        };
        return respuesta;
    }

    public async updateServiceInput(idinput:number, reqBody:IInput){
        const input = await Input.findOneBy({idinput:idinput});
        if(!input)
        return Promise.reject("NO EXISTE INPUTS");
        input.idproduc = reqBody.idproduc,
        input.stock = reqBody.stock,
        input.dateinp = reqBody.dateinp

        input.save();
        return input;
    }

}

export default InputService;