import Brand from "../entities/Brand";
import { IBrand } from "../Interfaces/IBrand";

class brandservice{
    public async addServiceBrand(reqBody: IBrand){
        const brand =  new Brand();
        brand.idbrand = reqBody.idbrand;
        brand.name_brand =  reqBody.name_brand;
        brand.state =  reqBody.state
        return await brand.save();
    }
}

export default brandservice;