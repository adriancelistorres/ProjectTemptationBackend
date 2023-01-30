import { isReadable } from "stream";
import Category from "../entities/Category";
import Order from "../entities/Order";
import { IOrder } from "../Interfaces/IOrder";

class Orderservice{
    /*Metodo para Agregar una Order */
    public async addServiceOrder(reqBody: IOrder){
        const order = new Order();
        order.idorder =  reqBody.idOrder;
        order.idperson = reqBody.idperson;
        order.idpay =  reqBody.idpay;
        order.dateorder = reqBody.dateorder;
        order.state =  reqBody.state;
        return await order.save();
    }

    /*Metodo para Obtener todas Order */
    public async getServiceOrder(){
        let respuesta: IOrder[] = ([] =[]);
        const order =  await Order.find();
        order.map((o) =>{
            let obj: IOrder = {idOrder: o.idorder, idperson: o.idperson,idpay: o.idpay, dateorder: o.dateorder, state: o.state};
            respuesta.push(obj);
        })
        return respuesta;
    }

    /*Metodo para Obtener una Order */
    public async getServiceOneOrder(idorder: number){
        const order =  await Order.findOneBy({idorder: idorder});
        let respuesta: IOrder ={
            idOrder: order?.idorder,
            idpay: order?.idpay,
            idperson: order?.idperson,
            dateorder: order?.dateorder,
            state: order?.state
        }
        return respuesta;
    }
    
    /* Metodo para actualizar una Order */
    public async updateServiceOrder(idorder: number, reqBody: IOrder){
        const order = await Order.findOneBy({idorder: idorder});

        if(!order) return Promise.reject("No hay una order");

        order.idperson = reqBody.idperson;
        order.idpay = reqBody.idpay;
        order.dateorder = reqBody.dateorder;
        order.state = reqBody.state;

        order.save();
        
        return order;
    }


    /*Metodo para Eliminar una Order */
    public async deleteServiceOrder(idorder: number){
        const order =  await Order.findOneBy({idorder: idorder});
        if(!order){
            return Promise.reject("No existe esa Orden");
        }else{
            order.state = 0;
            order.save();
            return order;
        }
    }


}

export default Orderservice;