import SaleDetail from "../entities/Sale_Detail";
import { ISaleDetail } from "../Interfaces/ISaleDetail";

class SaleDetailService{

    public async addServiceSaleDetail(resBody: ISaleDetail){
        const saledetail = new SaleDetail();
        saledetail.idsale =  resBody.idsale;
        saledetail.idproduc = resBody.idproduc;
        saledetail.idorder = resBody.idorder;
        saledetail.quantity = resBody.quantity;
        saledetail.price_sale = resBody.price_sale;
        saledetail.discount = resBody.discount;
        return await saledetail.save();
    }

    public async getServiceSaleDetail(){
        let respuesta : ISaleDetail[] = ([] = []);
        const saledetail = await SaleDetail.find();
        saledetail.map((s) =>{
            let obj: ISaleDetail = {idsale: s.idsale, idorder: s.idorder, idproduc: s.idproduc, quantity: s.quantity, price_sale: s.price_sale, discount: s.discount};
            respuesta.push(obj);
        })
        return respuesta;
    }

    public async getServiceOneSaleDetail(idsale: number){
        const saledetail = await SaleDetail.findOneBy({idsale: idsale});
        let respuesta: ISaleDetail ={
            idsale: saledetail?.idsale,
            idorder: saledetail?.idorder,
            idproduc: saledetail?.idproduc,
            quantity: saledetail?.quantity,
            price_sale: saledetail?.price_sale,
            discount: saledetail?.discount
        }
        return respuesta;
    }

    public async updateServiceSaleDetail(idsale: number, reqBody: ISaleDetail){
        const saledetail =  await SaleDetail.findOneBy({idsale: idsale});
        if(!saledetail) return Promise.reject("No hay SaleDetail");

        saledetail.idproduc =  reqBody.idproduc;
        saledetail.idorder = reqBody.idorder;
        saledetail.quantity = reqBody.quantity;
        saledetail.price_sale = reqBody.price_sale;
        saledetail.discount = reqBody.discount;

        saledetail.save();
        return saledetail;
    }

    public async deleteServiceSaleDetail(idsale:number){
        const saledetail = await SaleDetail.findOneBy({idsale: idsale});
        if(!saledetail){
            return Promise.reject("No Hay SaleDetail Disponible")
        }else{
            saledetail.discount = 0;
            saledetail.save();
            return saledetail;
        }
    }


}
export default SaleDetailService;