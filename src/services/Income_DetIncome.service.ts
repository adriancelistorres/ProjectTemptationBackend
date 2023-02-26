import { AppDataSource } from '../databases/db';
import Person from '../entities/Person';
import Roles from '../entities/Roles';

class Income_DetIncomeService{

    public async GetIncomewhitDetIncome(idicome:number){
        try {
            const query = await AppDataSource.createQueryBuilder(Roles,'roles').innerJoinAndSelect(Person,'person','person.idrol= roles.idrol').
            select('roles.namerol').distinct().getMany();
            console.log(JSON.stringify(query));
            return query;
        } catch (error) {
            return Promise.reject(" does not exist ");
        }
    }
}

export default Income_DetIncomeService