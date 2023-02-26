import { AppDataSource } from '../databases/db';
import Income from '../entities/Income';
import Person from '../entities/Person';
import Roles from '../entities/Roles';

import { Any, getRepository } from 'typeorm';
import DetailIncome from '../entities/DetailIncome';
import Products from '../entities/Products';


class Income_DetIncomeService{

    public async GetIncomewhitDetIncome(idicome: Number){
        try {
            const myArray: Number[] = [2];
            // const incomeRepository = getRepository(Income);
            // const result = await incomeRepository.query('EXEC procedure_icome @=?', [2]);
            const result = await AppDataSource.query(
                'Call procedure_icome(?)',
                [idicome]
                 // Array con el valor de la variable que se usará en la consulta
              );
            return result;
           
        } catch (error) {
            return Promise.reject(" does not exist ");
        }
    }
}

export default Income_DetIncomeService