import Income from "../entities/Income";
import { IIncome } from "../Interfaces/IIncome";

class IncomeService{

    public async addServiceIncome(reqBody: IIncome){
        const income =  new Income();
        income.idicome = reqBody.idicome;
        income.idprovider =  reqBody.idprovider;
        income.dateinco=reqBody.dateinco;
        income.state=reqBody.state;
        return await income.save();
    }

    public async getServiceIncome(){
        let respuesta: IIncome[] = ([] =[]);
        const income =  await Income.find();
        income.map((b) =>{
            let obj: IIncome = {idicome: b.idicome, idprovider: b.idprovider, dateinco: b.dateinco, state:b.state };
            respuesta.push(obj);
        })
        return respuesta;
    }

    public async getServiceOneIncome(idicome: number){
        const income =  await Income.findOneBy({idicome: idicome});
        let respuesta: IIncome ={
            idicome: income?.idicome,
            idprovider: income?.idprovider,
            dateinco: income?.dateinco,
            state: income?.state,
        }
        return respuesta;
    }

    public async UpdateServiceIncome(idicome:number, reqBody:IIncome){
        const income = await Income.findOneBy({idicome:idicome});

        if(!income) return Promise.reject("No existe Ingreso");

        income.idicome = reqBody.idicome;
        income.idprovider=reqBody.idprovider;
        income.dateinco=reqBody.dateinco;
        income.state = reqBody.state;
        income.save();
        return income;
    }

    public async deleteServiceIncome(idicome: number){
        const income = await Income.findOneBy({idicome: idicome});
        if(!income){
            return Promise.reject("No existe Ingreso")
        }else{
            income.state = 0;
            income.save();
            return income;
        }
    }

}

export default IncomeService;