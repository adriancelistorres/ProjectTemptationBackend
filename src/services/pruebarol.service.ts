import { AppDataSource } from "../databases/db";
import Order from "../entities/Order";
import Person from "../entities/Person";
import Roles from "../entities/Roles";

class PruebaRol{


    public async GetViewRol(){
        try {
            const query = await AppDataSource.createQueryBuilder(Roles,'roles').innerJoinAndSelect(Person,'person','person.idrol= roles.idrol').
            select('roles.namerol').distinct().getMany();
            console.log(JSON.stringify(query));
            return query;
        } catch (error) {
            return Promise.reject(" does not exist ");
        }
    }
    public async GetLastOrder(){
        try {
            const query = await AppDataSource.createQueryBuilder(Order,'order').orderBy('idorder','DESC').limit(1).getOne();
            console.log(JSON.stringify(query));
            return query;
        } catch (error) {
            return Promise.reject(" does not exist ");
        }
    }
}

export default PruebaRol