import PaymentMethod from "../entities/PaymentMethod";
import { IPaymentMethod } from "../Interfaces/IPaymentMethod";

/*import { IPaymentMethod } from "../Interfaces/IProvider";*/

class PaymentMethodservice{
    /*Metodo para Agregar una Metodo de Pago */
    public async addServicePaymentMethod(reqBody: IPaymentMethod){
        const paymethod =  new PaymentMethod();
        paymethod.idpay = reqBody.idpay;
        paymethod.name_pay =  reqBody.name_pay;
        paymethod.state=reqBody.state;
        paymethod.key=reqBody.key;
        return await paymethod.save();
    }

    /*Metodo para Obtener todos los proveedores */
    public async getServicePaymentMethod(){
        let respuesta: IPaymentMethod[] = ([] =[]);
        const prov =  await PaymentMethod.find();
        prov.map((b) =>{
            let obj: IPaymentMethod = {idpay: b.idpay, name_pay: b.name_pay, state: b.state, key:b.key };
            respuesta.push(obj);
        })
        return respuesta;
    }

     /*Metodo para Obtener un provevedor */
     public async getServiceOnePaymentMethod(idpay: number){
         const paymet =  await PaymentMethod.findOneBy({idpay: idpay});
         let respuesta: IPaymentMethod ={
            idpay: paymet?.idpay,
            name_pay: paymet?.name_pay,
            state: paymet?.state,
            key: paymet?.key,            
         }
         return respuesta;
     }

     /* Metodo para actualizar un provevedor */
     public async UpdateServicePaymentMethod(idpay:number, reqBody:IPaymentMethod){
        const paymet = await PaymentMethod.findOneBy({idpay:idpay});

        if(!paymet) return Promise.reject("No hay Metodo de Pago");

        paymet.name_pay = reqBody.name_pay;
        paymet.state = reqBody.state;
        paymet.key=reqBody.key;
        paymet.save();
        return paymet;
     }

     /*Metodo para Eliminar un provevedor */
     public async deleteServicePaymentMethod(idpay: number){
        const paymet = await PaymentMethod.findOneBy({idpay: idpay});
        if(!paymet){
            return Promise.reject("No existe Metodo de Pago")
        }else{
            paymet.state = 0;
            paymet.save();
            return paymet;
        }
     }

}

export default PaymentMethodservice;